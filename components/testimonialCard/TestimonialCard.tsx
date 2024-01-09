import Image from "next/image";
import rahulImg from "@/public/rahul.jpeg";
import { IoStar } from "react-icons/io5";

interface CardProps {
  name: string;
  designation: string;
  quote: string;
}

const TestimonialCard = ({ name, designation, quote }: CardProps) => {
  return (
    <div className="bg-static p-8">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>{name}</p>
          <span>{designation}</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-row gap-4 mb-4">
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
          <IoStar size="4em" color="var(--accent)" />
        </div>

        <blockquote>{quote}</blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;
