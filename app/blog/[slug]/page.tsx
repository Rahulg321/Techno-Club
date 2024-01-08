import { getBlogs } from "@/firebase/getBlogs";
import { fetchBlogPost } from "@/firebase/getBlogPost";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import classes from "./BlogContent.module.css";

export const revalidate = 3600; // revalidate the data at most every hour

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  return (
    <section className={`narrow-container`}>what is going on here</section>
  );
};

export default SingleBlog;
