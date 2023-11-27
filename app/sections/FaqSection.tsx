import Faq from '@/components/faq/Faq';

const FAQ_QUESTIONS = [
  {
    id: 'q1',
    question: 'How many colors should I choose?',
    answer:
      "The hero image is inspired by Piet Mondrian's Composition with Large Red Plane, Yellow, Black, Grey and Blue. This composition keeps the ratio of the main colors (red, blue, and yellow) very close to the 60-30-10 rule of UI design. This is mainly why I've chosen this composition to visualize the distribution of the colors on the page.",
  },
  {
    id: 'q2',
    question: 'What will I do as a member?',
    answer:
      "The hero image is inspired by Piet Mondrian's Composition with Large Red Plane, Yellow, Black, Grey and Blue. This composition keeps the ratio of the main colors (red, blue, and yellow) very close to the 60-30-10 rule of UI design. This is mainly why I've chosen this composition to visualize the distribution of the colors on the page.",
  },

  {
    id: 'q3',
    question: 'Do I need to be a college student',
    answer: 'Yes you need to be a college student',
  },
  {
    id: 'q4',
    question: 'How can I become an executive member?',
    answer: 'Become an executive member by contesting in elections',
  },
];

const FaqSection = () => {
  return (
    <section className="big-container">
      <div className="flex flex-col lg:justify-between lg:flex-row">
        <div className="p-4 flex flex-col  justify-start items-start">
          <h2>FAQ</h2>
          <h4>Answers to some questions you might have.</h4>
        </div>

        <div className="flex gap-8 flex-col">
          {FAQ_QUESTIONS.map((e) => {
            return <Faq question={e.question} answer={e.answer} key={e.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
