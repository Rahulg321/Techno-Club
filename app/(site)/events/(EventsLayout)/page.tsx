import EventCard from "@/components/eventCard/EventCard";
import { getEvents } from "@/sanity/sanity-utils";
import type { Metadata } from "next";

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
          <EventCard
            key={e._id}
            title={e.name}
            slug={e.slug}
            eventDate={e.eventDate}
            venue={e.venue}
            description={e.description}
          />
        );
      })}
    </>
  );
};

export default Events;
