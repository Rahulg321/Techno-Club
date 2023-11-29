import { Blog } from '@/app/types';
import { formatTimestampRange } from '@/lib/formatDate';
import Link from 'next/link';

const BlogCard = (props: Blog) => {
  const formattedDate = props.created_at
    ? formatTimestampRange(props.created_at)
    : '';

  return (
    <div className="bg-static flex flex-col justify-between border rounded-md px-2 py-4 md:px-4 md:py-6">
      <div>
        <span className="italic">{formattedDate}</span>
        <h4 className="mt-1 mb-2">{props.title}</h4>
        <span className="italic">({props.written_by})</span>
        <p className="my-3">{props.description}</p>
      </div>

      <div className="">
        <Link href={`/blog/${props.blogId}`}>
          <button className="w-full bg-primary text-background rounded-md py-2 px-1">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
