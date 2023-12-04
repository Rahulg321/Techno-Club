'use client';

import { useState } from 'react';
import { formatTimestampRange } from '@/lib/formatDate';
import { Event } from '@/app/types';
import { useRouter } from 'next/navigation'
 

const EventCard = (props: Event) => {
  const [viewDetails, setViewDetails] = useState(false);
  const router = useRouter()

  const formattedDate = props.event_date
    ? formatTimestampRange(props.event_date)
    : '';

  const viewDetailHandler = () => {
    setViewDetails((prevState) => {
      return !prevState;
    });
  };

  let content = (
    <>
      <p>{props.event_detail}</p>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <button onClick={() =>{router.push(`/events/${props.eventId}/register`)}}>Register Now</button>
        <button className="secondary-btn" onClick={viewDetailHandler}>
          Show Less
        </button>
      </div>
    </>
  );

  return (
    <div className=" py-4 px-2 lg:py-10 lg:px-8 odd:bg-static odd:border rounded-md flex flex-col justify-around items-start">
      <h2 className="mb-4 font-extrabold">{props.name}</h2>
      <h4 className="mb-4 font-normal">
        {formattedDate} | {props.event_venue}
      </h4>
      <p className="mb-4">{props.event_description}</p>

      {viewDetails && content}

      {!viewDetails && (
        <button
          onClick={viewDetailHandler}
          className="bg-primary px-4 py-2 text-background rounded-md"
        >
          View Details
        </button>
      )}
    </div>
  );
};

export default EventCard;
