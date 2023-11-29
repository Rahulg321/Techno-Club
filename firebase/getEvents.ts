import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './config';

import { Event } from '@/app/types';

export const getCurrentEvents = async () => {
  const fetchedEvents: Event[] = [];

  const q = query(collection(db, 'events'), where('current_event', '==', true));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const eventId = doc.id;
    const event = {
      ...(doc.data() as Event),
      eventId,
    };

    fetchedEvents.push(event);
  });

  return fetchedEvents;
};

export const getPreviousEvents = async () => {
  const fetchedEvents: Event[] = [];

  const q = query(
    collection(db, 'events'),
    where('current_event', '==', false)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const eventId = doc.id;
    const event = {
      ...(doc.data() as Event),
      eventId,
    };

    fetchedEvents.push(event);
  });

  return fetchedEvents;
};
