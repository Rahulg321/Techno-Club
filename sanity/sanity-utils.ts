import { groq } from "next-sanity";
import { Event, Blog } from "@/app/types";
import client from "./client/client-config";

// all the functions to grab data from sanity
export async function getEvents(): Promise<Event[]> {
  return client.fetch(groq`
    *[_type == "event"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        eventDate,
        venue,
        description,
        content
    }
  `);
}

export async function getBlogs(): Promise<Blog[]> {
  return client.fetch(groq`
    *[_type == "blog"]{
        _id,
        _createdAt,
        title,
        "slug":slug.current,
        author,
        category->,
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
      eventDate,
      venue,
      description,
      content
    }
  `,
    {
      eventSlug,
    }
  );
}

export async function getBlog(blogSlug: string): Promise<Blog> {
  return client.fetch(
    groq`
    *[_type == "blog" && slug.current == $blogSlug][0]{
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      author,
      category->,
      content
    }
  `,
    {
      blogSlug: blogSlug,
    }
  );
}
