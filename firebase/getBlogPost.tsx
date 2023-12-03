import { doc, getDoc } from 'firebase/firestore';
import { db } from './config.js';
import { Blog } from '@/app/types';

export const fetchBlogPost = async (id: string) => {
  const docRef = doc(db, 'blogs', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const blogpost: Blog = {
      ...(docSnap.data() as Blog),
      blogId: docSnap.id,
    };
    return blogpost;
  } else {
    // docSnap.data() will be undefined in this case
    return undefined;
  }
};
