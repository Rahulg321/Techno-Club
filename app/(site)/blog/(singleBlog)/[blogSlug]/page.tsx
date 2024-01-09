import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

const SingleBlog = async ({ params }: { params: { blogSlug: string } }) => {
  const blog = await getBlog(params.blogSlug);
  console.log("individual blog", blog);
  return (
    <article className="narrow-container prose md:prose-lg lg:prose-xl dark:prose-invert prose-a:text-blue-600">
      <PortableText value={blog.content} />
    </article>
  );
};

export default SingleBlog;
