import EventCard from '@/components/eventCard/EventCard';
import { getCurrentEvents } from '@/firebase/getEvents';

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
