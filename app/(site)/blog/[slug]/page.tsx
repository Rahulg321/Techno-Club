import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import classes from "./BlogContent.module.css";

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  return (
    <section className={`narrow-container`}>what is going on here</section>
  );
};

export default SingleBlog;
