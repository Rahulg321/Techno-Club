import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from './config';

import { ExecutiveMember, Member } from '@/app/types';

export const getExecutiveMembers = async () => {
  const fetchedMembers: ExecutiveMember[] = [];

  const q = query(collection(db, 'executive_members'), orderBy('rank'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const memberId = doc.id;
    const member = {
      ...(doc.data() as ExecutiveMember),
      memberId,
    };

    fetchedMembers.push(member);
  });

  return fetchedMembers;
};

export const getMembers = async (category: string) => {
  const fetchedMembers: Member[] = [];

  const q = query(
    collection(db, 'teams'),
    where('category', 'array-contains-any', [category])
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const memberId = doc.id;
    const member = {
      ...(doc.data() as Member),
      memberId,
    };

    fetchedMembers.push(member);
  });

  return fetchedMembers;
};
