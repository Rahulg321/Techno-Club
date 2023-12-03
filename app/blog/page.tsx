import { Suspense } from 'react';
import BlogLists from './BlogLists';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techno Club Blog',
  description: 'Get the latest news about our club',
};

const Blog = async () => {
  return (
    <section className="big-container">
      <h1 className="heading">The Latest Club News</h1>

      <Suspense fallback="fetching Blog Posts.......">
        <BlogLists />
      </Suspense>
    </section>
  );
};

export default Blog;
