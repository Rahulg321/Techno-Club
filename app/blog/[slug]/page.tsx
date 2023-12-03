import { getBlogs } from '@/firebase/getBlogs';
import { fetchBlogPost } from '@/firebase/getBlogPost';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import classes from './BlogContent.module.css';

export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((post) => ({
    slug: post.blogId,
  }));
}

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const blogPost = await fetchBlogPost(params.slug);

  if (!blogPost) {
    return notFound();
  }

  return (
    <section className={`narrow-container ${classes['blog-content']}`}>
      <MDXRemote source={blogPost.main_content} />
    </section>
  );
};

export default SingleBlog;
