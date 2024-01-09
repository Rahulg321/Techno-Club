import type { Metadata } from "next";
import BlogTabs from "@/components/BlogTabs";
import BlogCard from "@/components/blogCard/BlogCard";
import { getBlogs } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
  title: "Techno Club Blog",
  description: "Get the latest news about our club",
};

export const dynamic = "force-dynamic";

const Blog = async () => {
  const allBlogs = await getBlogs();

  return (
    <>
      <h2 className="mt-12 heading">Latest Articles</h2>
      <BlogTabs />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {allBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            category={blog.category.name}
            createdAt="Jan 24, 2024"
            blogSlug={blog.slug}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
