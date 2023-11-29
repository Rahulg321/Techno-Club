import Link from 'next/link';

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="narrow-container">
      <h1 className="heading">Events</h1>

      <div className="flex gap-8 mb-12">
        <Link href="/events">
          <h4>Current Events</h4>
        </Link>
        <Link href="/events/previousEvents">
          <h4>Previous Events</h4>
        </Link>
      </div>

      {children}
    </section>
  );
};

export default layout;
