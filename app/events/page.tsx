import EventCard from "@/components/eventCard/EventCard";
import { getCurrentEvents } from "@/firebase/getEvents";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Events",
  description: "Participate in our events",
};

export const revalidate = 3600; // revalidate the data at most every hour

const Events = async () => {
  return <div className="grid grid-cols-1 gap-8">view our events here</div>;
};

export default Events;
