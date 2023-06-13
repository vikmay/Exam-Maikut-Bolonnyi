import React from "react";
import SimpleAccordion from "@/components/accordion";
import s from "./index.module.scss";
const faqData = [
  {
    question: "Де вас можна знайти?",
    answer:
      "lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    question: "Чи можна зробити замовлення?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    question: "Чи є у вас доставка?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    question: "Чи є у ва соплата при отриманні?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  // Add as many questions and answers as you need
];

const FAQ = () => {
  return (
    <>
      <div className={s.faq_wrapper}>
        <div className={s.faq_container}>
          <h2 className={s.faq_title}>Найчастіші запитання</h2>

          {faqData.map((item, index) => (
            <SimpleAccordion
              key={index}
              AccordionTitle={item.question}
              AccordionText={item.answer}
              titleClassName={s.faq_question}
              textClassName={s.faq_answer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;


