'use client';

import { useState } from 'react';

interface EventProps {
  title: string;
  date: string;
  shortDes: string;
  longDes: string;
}

const EventCard = () => {
  const [viewDetails, setViewDetails] = useState(false);

  const viewDetailHandler = () => {
    setViewDetails((prevState) => {
      return !prevState;
    });
  };

  let content = (
    <>
      <p>
        🎙️ Join CSC for Alt-Tab, a lightning tech talk series presented by
        students! Alt-Tab consists of several ~15-minute talks about a variety
        of topics related to computer science and technology. Snacks will be
        provided.
      </p>
      <ul>
        <li>
          Tropical Semirings: General method to solve graph problems in a purely
          functional way - Simon Zeng
        </li>
        <li>
          Tropical Semirings: General method to solve graph problems in a purely
          functional way - Simon Zeng
        </li>
        <li>
          Tropical Semirings: General method to solve graph problems in a purely
          functional way - Simon Zeng
        </li>
        <li>
          Tropical Semirings: General method to solve graph problems in a purely
          functional way - Simon Zeng
        </li>
        <li>
          Tropical Semirings: General method to solve graph problems in a purely
          functional way - Simon Zeng
        </li>
        <li>
          Tropical Semirings: General method to solve graph problems in a purely
          functional way - Simon Zeng
        </li>
      </ul>
    </>
  );

  return (
    <div className=" p-4 odd:bg-static rounded-md flex flex-col justify-around items-start">
      <h3>AfterHours</h3>
      <h4>December 4, 2022 - December 3, 2022 | SCL Multipurpose Room</h4>
      <p>
        Come join us for chill, small-group discussions about a variety of
        topics, including relationships and friendships, maintaining routine,
        dealing with imposter syndrome and burnout, and any other topics you’d
        like to bring into the conversation!
      </p>

      {viewDetails && content}

      <button onClick={viewDetailHandler}>View Details</button>
    </div>
  );
};

export default EventCard;
