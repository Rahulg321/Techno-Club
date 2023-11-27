'use client';

import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { GrSubtractCircle } from 'react-icons/gr';

interface faqProps {
  question: string;
  answer: string;
}

const Faq = ({ question, answer }: faqProps) => {
  const [toggle, setToggle] = useState(false);

  const toggleClickHandler = () => {
    setToggle((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="bg-secondary lg:w-[40rem] p-4 rounded-md">
      <div className="flex justify-between">
        <h4>{question}</h4>
        <button onClick={toggleClickHandler}>
          {toggle ? (
            <GrSubtractCircle size={20} />
          ) : (
            <IoIosAddCircle size={20} />
          )}
        </button>
      </div>
      <div>{toggle && <p>{answer}</p>}</div>
    </div>
  );
};

export default Faq;
