import Image from 'next/image';
import rahulImg from '@/public/rahul.jpeg';
import Link from 'next/link';

const BlogCard = () => {
  return (
    <div className="bg-static rounded-md p-2">
      <div className="flex justify-between">
        <span>October 26th, 2023</span>
        <Image
          src={rahulImg}
          alt="image of the blog author"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>

      <h4>How to think about security in Nextjs?</h4>
      <p className="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque
        nostrum suscipit, cum tenetur odio debitis ex? Accusantium aliquid esse
        molestias quo magnam, laudantium facilis magni eligendi, dolores
        perspiciatis quasi.
      </p>

      <div className="px-2">
        <Link href={`/blog/something`}>
          <button className="w-full bg-primary text-background rounded-md py-2 px-1">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
