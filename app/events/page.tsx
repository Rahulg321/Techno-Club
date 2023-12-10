import EventCard from '@/components/eventCard/EventCard';
import { getCurrentEvents } from '@/firebase/getEvents';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Club Events',
  description: 'Participate in our events',
};

export const revalidate = 3600; // revalidate the data at most every hour

const Events = async () => {
  const events = await getCurrentEvents();

  return (
    <div className="grid grid-cols-1 gap-8">
      {events.map((e) => {
        return <EventCard {...e} key={e.eventId} />;
      })}
    </div>
  );
};

export default Events;
