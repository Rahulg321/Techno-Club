import EventsNavList from "@/components/EventsNavList";

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  

  return (
    <section className="narrow-container">
      <h1 className="heading">Events</h1>

      <div className="flex gap-8 mb-12">
        <EventsNavList/>
      </div>

      {children}
    </section>
  );
};

export default layout;
