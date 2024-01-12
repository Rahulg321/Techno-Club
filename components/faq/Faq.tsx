"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

interface faqProps {
  question: string;
  answer: string;
}

const Faq = ({ question, answer }: faqProps) => {
  return (
    <Accordion variant="bordered">
      <AccordionItem key="1" aria-label="Accordion 1" title={question}>
        {answer}
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
