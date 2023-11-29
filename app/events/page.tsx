import Link from 'next/link';
import EventCard from '@/components/eventCard/EventCard';

const Events = () => {
  return (
    <section className="narrow-container">
      <h1 className="heading">Events</h1>

      <div className="flex gap-8 mb-12">
        <Link href="">
          <h3>Current Events</h3>
        </Link>
        <Link href="">
          <h3>Previous Events</h3>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default Events;
