import EventCard from "@/components/eventCard/EventCard";
import { getEvents } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Club Events",
  description: "Participate in our events",
};

const Events = async () => {
  const events = await getEvents();

  return (
    <>
      {events.map((e) => {
        return (
          <Link key={e._id} className="" href={`/events/${e.slug}`}>
            <EventCard key={e._id} title={e.name} createdAt="Jan 24, 2024" />
          </Link>
        );
      })}
    </>
  );
};

export default Events;
