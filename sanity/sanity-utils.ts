import { groq } from "next-sanity";
import { Event } from "@/app/types";
import client from "./client/client-config";

// all the functions to grab data from sanity
export async function getEvents(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        content
    }
  `);
}

export async function getEvent(eventSlug: string): Promise<Event> {
  return client.fetch(
    groq`
    *[_type == "event" && slug.current == $eventSlug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        content
    }
  `,
    {
      eventSlug: eventSlug,
    }
  );
}
