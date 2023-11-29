import { collection, getDocs } from 'firebase/firestore';
import { db } from './config.js';
import { Blog } from '@/app/types.js';

export const getBlogs = async () => {
  const fetchedBlogs: Blog[] = [];

  const querySnapshot = await getDocs(collection(db, 'blogs'));
  querySnapshot.forEach((doc) => {
    const blogId = doc.id;
    const blog = {
      ...(doc.data() as Blog),
      blogId,
    };
    fetchedBlogs.push(blog);
  });
  return fetchedBlogs;
};
