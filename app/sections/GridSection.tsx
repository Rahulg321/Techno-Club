import Link from 'next/link';

const GridSection = () => {
  return (
    <section className="big-container">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-4 bg-primary py-16 px-5 rounded-md">
          <div className="text-background text-center">
            <h3>200K+ Users</h3>
          </div>
        </div>

        <div className="col-span-1 bg-secondary py-16 px-5 rounded-md">
          <div className="text-text text-center">
            <h3>100% Free!</h3>
          </div>
        </div>

        <div className="lg:col-span-3 bg-text py-16 px-5 rounded-md">
          <div className="text-background text-center">
            <h3>11K+ Plugin Users</h3>
            <Link href="" className="underline">
              Check it out on figma
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 bg-accent py-16 px-5 rounded-md">
          <div className="text-background text-center">
            <h3>200+ ProductHunt Upvotes</h3>
            <Link href="" className="underline">
              Leave a Review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
