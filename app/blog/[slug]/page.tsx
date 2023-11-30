import { getBlogs } from '@/firebase/getBlogs';

export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((post) => ({
    slug: post.blogId,
  }));
}

const SingleBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <h1>View a particular blog posts</h1>
      <p>The id of the blog post is {params.slug}</p>
    </>
  );
};

export default SingleBlog;
