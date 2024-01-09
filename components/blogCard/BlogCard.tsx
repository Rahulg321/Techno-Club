import Link from "next/link";
import React from "react";

type BlogCardProps = {
  title: string;
  category: string;
  blogSlug: string;
  createdAt: string;
};

const BlogCard = ({ title, category, createdAt, blogSlug }: BlogCardProps) => {
  return (
    <Link href={`/blog/${blogSlug}`}>
      <div className="flex flex-col shadow p-4 text-pretty hover:scale-110 transition-all">
        <span className="text-muted underline underline-offset-2">
          {category}
        </span>
        <h3 className="my-2">{title}</h3>
        <span className="text-muted">{createdAt}</span>
      </div>
    </Link>
  );
};

export default BlogCard;
