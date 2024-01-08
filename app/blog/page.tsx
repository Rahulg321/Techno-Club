import { Suspense } from "react";
import BlogLists from "./BlogLists";
import type { Metadata } from "next";
import BlogHeroGrid from "@/components/BlogHeroGrid/BlogHeroGrid";
import BlogTabs from "@/components/BlogTabs";
import BlogCard from "@/components/blogCard/BlogCard";

export const metadata: Metadata = {
  title: "Techno Club Blog",
  description: "Get the latest news about our club",
};

const Blog = async () => {
  return (
    <>
      <section className="narrow-container">
        <h1 className="heading">Featured Articles</h1>
        <BlogHeroGrid />
      </section>
      <section className="narrow-container">
        <h2 className="mt-12 heading">Latest Articles</h2>
        <BlogTabs />
        <div className="mt-12  grid grid-cols-1 md:grid-cols-2 gap-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
