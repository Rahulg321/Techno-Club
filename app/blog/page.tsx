import BlogCard from '@/components/blogCard/BlogCard';
import { getBlogs } from '@/firebase/getBlogs';

const Blog = async () => {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <section className="big-container">
      <h1 className="heading">The Latest Club News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((e) => {
          return <BlogCard {...e} key={e.blogId} />;
        })}
      </div>
    </section>
  );
};

export default Blog;
