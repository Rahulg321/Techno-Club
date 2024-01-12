import TestimonialCard from "@/components/testimonialCard/TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="big-container">
      <div className="text-center mb-12">
        <h2>Testimonials</h2>
        <h4>What people are saying about this site.</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          name="Harinder Pal Singh"
          designation="HOD CS"
          quote="Wow! I love this site. Realtime Colors is all websites at the same
            time."
        />
        <TestimonialCard
          name="Gurpreet Kaur"
          designation="Coordinator CS"
          quote="I had the most fun developing and coordinating on this site."
        />
        <TestimonialCard
          name="Neha Sharma"
          designation="Club Convener"
          quote="It feels great to see this club go to great heights."
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
