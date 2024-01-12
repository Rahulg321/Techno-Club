import Faq from "@/components/faq/Faq";

const FAQ_QUESTIONS = [
  {
    id: "q1",
    question: "What is the purpose of the coding and tech club in our college?",
    answer:
      "The coding and tech club aims to provide a platform for students to explore and enhance their coding and technical skills. We organize workshops, coding competitions, and collaborative projects to foster a culture of innovation and learning.",
  },
  {
    id: "q2",
    question: " How can I join the coding and tech club?",
    answer:
      "The club is open to all college students who have an interest in coding and technology. Whether you're a beginner or an experienced coder, everyone is welcome to join and contribute to the vibrant tech community.",
  },

  {
    id: "q3",
    question: " What types of events and activities does the club organize?",
    answer:
      "We organize a variety of events, including coding competitions, tech talks, workshops, hackathons, and collaborative coding projects. These activities cater to different skill levels and interests within the coding and tech community.",
  },
  {
    id: "q4",
    question: "What programming languages does the club focus on?",
    answer:
      "The club is language-agnostic, meaning we welcome members interested in a variety of programming languages. Our activities cover a broad range of languages, and we aim to create an inclusive environment where members can explore and learn new languages based on their interests.",
  },
  {
    id: "q5",
    question:
      "Are there any prerequisites for joining the coding and tech club?",
    answer:
      "No specific prerequisites are required. Whether you're a beginner or an experienced coder, as long as you have an interest in technology and a willingness to learn, you are encouraged to join the club.",
  },
];

const FaqSection = () => {
  return (
    <section className="big-container">
      <div className="flex flex-col lg:flex-row flex-1 gap-12">
        <div className="flex flex-col justify-center items-start">
          <h2>FAQ</h2>
          <h4>Answers to some questions you might have.</h4>
        </div>

        <div className="flex-1">
          {FAQ_QUESTIONS.map((e) => {
            return <Faq question={e.question} answer={e.answer} key={e.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
