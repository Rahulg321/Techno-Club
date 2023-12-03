import Link from 'next/link';

const GridSection = () => {
  return (
    <section className="big-container">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-4 bg-primary py-16 px-5 rounded-md">
          <div className="text-background text-center">
            <h3>Open to All PCTE Students</h3>
          </div>
        </div>

        <div className="col-span-1 bg-secondary py-16 px-5 rounded-md">
          <div className="text-text text-center">
            <h3>Join Now</h3>
          </div>
        </div>

        <div className="lg:col-span-3 bg-text py-16 px-5 rounded-md">
          <div className="text-background text-center">
            <h3>200+ Active Members</h3>
            <Link href="" className="underline">
              Explore Memberships
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 bg-accent py-16 px-5 rounded-md">
          <div className="text-background text-center">
            <h3>10+ Successful Events</h3>
            <Link href="" className="underline">
              View our Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
