import TestimonialCard from '@/components/testimonialCard/TestimonialCard';

const TestimonialSection = () => {
  return (
    <section className="big-container">
      <div className="text-center mb-12">
        <h2>Testimonials</h2>
        <h4>What people are saying about this site.</h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default TestimonialSection;
