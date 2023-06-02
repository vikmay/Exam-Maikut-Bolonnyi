import React, { useState } from "react";
import s from "./index.module.scss";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, children, headerClassName, bodyClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.accordion}>
      <button onClick={toggleIsOpen} className={`${isOpen ? s.openHeader : s.closedHeader} ${headerClassName}`}>
        {title}
      </button>
      {isOpen && <div className={`${s.body} ${bodyClassName}`}>{children}</div>}
    </div>
  );
};

export default CustomAccordion;
