import { getPreviousEvents } from '@/firebase/getEvents';
import EventCard from '@/components/eventCard/EventCard';

export const revalidate = 3600; // revalidate the data at most every hour

const page = async () => {
  const events = await getPreviousEvents();

  return (
    <div className="grid grid-cols-1 gap-8">
      {events.map((e) => {
        return <EventCard {...e} key={e.eventId} />;
      })}
    </div>
  );
};

export default page;
