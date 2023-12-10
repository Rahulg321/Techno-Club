import BlogCard from '@/components/blogCard/BlogCard';
import { getBlogs } from '@/firebase/getBlogs';

export const revalidate = 3600; // revalidate the data at most every hour

const BlogLists = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const blogs = await getBlogs();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((e) => {
        return <BlogCard {...e} key={e.blogId} />;
      })}
    </div>
  );
};

export default BlogLists;
