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
    <section className="narrow-container">
      <h1 className="heading">Events</h1>

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
    </section>
  );
};

export default Events;
