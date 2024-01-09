import EventCard from "@/components/eventCard/EventCard";

export const revalidate = 3600; // revalidate the data at most every hour

const page = async () => {
  return <div className="grid grid-cols-1 gap-8">previous events</div>;
};

export default page;
