'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const EventsNavList = () => {
  const pathname = usePathname();

  const links = [
    { id: 'l1', href: '/events', name: 'Events' },
    { id: 'l2', href: '/events/previousEvents', name: 'Previous Events' },
  ];

  return (
    <>
      {links.map((e) => (
        <Link
          href={e.href}
          key={e.id}
          className={clsx({
            underline: pathname === e.href,
          })}
        >
          <h4>{e.name}</h4>
        </Link>
      ))}
    </>
  );
};

export default EventsNavList;
