import Image from 'next/image';
import rahulImg from '@/public/rahul.jpeg';
import { IoStar } from 'react-icons/io5';
import Sidebaricon from '../Sidebaricon';

const TestimonialCard = () => {
  return (
    <div className="bg-static p-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Rahul Gupta</p>
          <span>Product Designer</span>
        </div>
        <Image
          src={rahulImg}
          width={50}
          height={50}
          alt="photo of website maker"
          className="rounded-full"
        />
      </div>

      <div className="mt-4">
        <div className="flex flex-row gap-4 mb-4">
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
        </div>

        <p>
          "Wow! I love this site. Realtime Colors is all websites at the same
          time.""
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
