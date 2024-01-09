import { getEvent } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import React from "react";

export const dynamic = "force-dynamic";

const page = async ({ params }: { params: { eventSlug: string } }) => {
  const slug = params.eventSlug;
  const project = await getEvent(slug);

  return (
    <div>
      {project.name}
      <article className="narrow-container prose md:prose-lg lg:prose-xl dark:prose-invert prose-a:text-blue-600">
        <PortableText value={project.content} />
      </article>
    </div>
  );
};

export default page;
