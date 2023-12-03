import Link from 'next/link';
import EventCard from '@/components/eventCard/EventCard';
import { getCurrentEvents } from '@/firebase/getEvents';

const Events = async () => {
  const events = await getCurrentEvents();
  console.log('events', events);

  return (
    <div className="grid grid-cols-1 gap-8">
      {events.map((e) => {
        return (
          <EventCard
            name={e.name}
            event_date={e.event_date}
            event_venue={e.event_venue}
            event_detail={e.event_detail}
            event_description={e.event_description}
            key={e.eventId}
          />
        );
      })}
    </div>
  );
};

export default Events;
