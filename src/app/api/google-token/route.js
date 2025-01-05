import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export const GET = withApiAuthRequired(async function handler(req) {
  try {
    const session = await getSession(req, NextResponse);
    if (!session || !session.user) {
      throw new Error("User is not authenticated");
    }

    const response = await fetch(
      `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${session.user.sub}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH0_MANAGEMENT_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }

    const user = await response.json();
    const googleIdentity = user.identities.find(
      (identity) => identity.provider === "google-oauth2"
    );

    if (!googleIdentity) {
      throw new Error("Google identity not found for user");
    }

    const googleAccessToken = googleIdentity.access_token;
    console.log("Google access token:", googleAccessToken);

    return NextResponse.json({ googleAccessToken });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
});
