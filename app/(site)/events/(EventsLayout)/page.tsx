import EventCard from "@/components/eventCard/EventCard";
import { getEvents } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Club Events",
  description: "Participate in our events",
};

const Events = async () => {
  const events = await getEvents();

  return (
    <>
      <p>Fetching from sanity studio using groq</p>
      {events.map((e) => {
        return (
          <Link
            key={e._id}
            className="mb-2 hover:underline"
            href={`/events/${e.slug}`}
          >
            <h2>{e.name}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default Events;
