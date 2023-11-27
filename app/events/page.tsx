import Link from 'next/link';
import EventCard from '@/components/eventCard/EventCard';

const Events = () => {
  return (
    <section className="big-container">
      <ul className="flex md:flex-row">
        <li>
          <Link href="">Previous Events</Link>
        </li>
        <li>
          <Link href="">Cuurent Events</Link>
        </li>
      </ul>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </section>
  );
};

export default Events;
