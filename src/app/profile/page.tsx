'use client'

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Hello2() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </>
  )
}