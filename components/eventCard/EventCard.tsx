import React from "react";
import formatDate from "@/lib/formatDate";
import { Button } from "@nextui-org/react";
import { BsPencilSquare } from "react-icons/bs";
import EventRegisterButton from "../EventRegisterModal";
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";

type EventCardProps = {
  title: string;
  slug: string;
  eventDate: string;
  venue: string;
  description: string;
};

const EventCard = ({
  title,
  eventDate,
  venue,
  slug,
  description,
}: EventCardProps) => {
  const updatedDate = formatDate(eventDate);

  return (
    <div className="flex flex-col shadow-md px-4 py-6 text-pretty mb-8 bg-static">
      <h3 className="">{title}</h3>
      <div className="lg:ml-4 my-4">
        <span className="">{updatedDate}</span>
        <span className="ml-4">| {venue}</span>
      </div>
      <p>{description}</p>
      <div className="flex mt-4">
        <EventRegisterButton
          eventName={title}
          eventDate={updatedDate}
          eventVenue={venue}
        />

        <Button
          as={Link}
          href={`events/${slug}`}
          color="secondary"
          size="lg"
          radius="lg"
          startContent={<IoMdAddCircleOutline />}
          className="ml-4 hover:-translate-y-2 transition"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
