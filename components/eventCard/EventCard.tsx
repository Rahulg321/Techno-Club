import Link from "next/link";
import React from "react";

type EventCardProps = {
  title: string;
  createdAt: string;
};

const EventCard = ({ title, createdAt }: EventCardProps) => {
  return (
    <div className="flex flex-col shadow-md p-4 text-pretty hover:scale-110 transition-all mb-8 border rounded-md ">
      <span className="text-muted underline underline-offset-2">
        {createdAt}
      </span>
      <h3 className="my-2">{title}</h3>
    </div>
  );
};

export default EventCard;
