"use client";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export interface CalendarEvent {
  id: string;
  summary: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
}

export default function Home() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState<string | null>(null);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !error && user) {
      setLoading(true);
      const fetchGoogleCalendarEvents = async () => {
        try {
          const tokenResponse = await fetch("/api/google-token");
          const { googleAccessToken } = await tokenResponse.json();

          const calendarResponse = await fetch(
            "https://www.googleapis.com/calendar/v3/calendars/primary/events",
            {
              headers: {
                Authorization: `Bearer ${googleAccessToken}`,
              },
            }
          );
          console.log(calendarResponse);
          if (calendarResponse.status !== 200) {
            setPageError(
              "Failed to fetch Google Calendar events with status code: " +
                calendarResponse.status +
                " " +
                calendarResponse.statusText
            );
          }
          const calendarData = await calendarResponse.json();
          setEvents(calendarData.items);
        } catch (error) {
          if (error instanceof Error) {
            setPageError(error.message);
          }
        } finally {
          setLoading(false);
        }
      };

      fetchGoogleCalendarEvents();
    }
  }, [isLoading, error, user]);

  if (isLoading || loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (pageError) return <div>{pageError}</div>;

  if (!user) {
    return (
      <div>
        <h1>Welcome to the Dashboard</h1>
        <p>Please log in to view your Google Calendar events.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Google Calendar Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.summary}</strong> - {event.start.dateTime} to{" "}
            {event.end.dateTime}
          </li>
        ))}
      </ul>
    </div>
  );
}
