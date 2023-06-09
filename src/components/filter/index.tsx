import React from "react";
import Accordion from "@/components/accordion2";
import filter from "@/../public/images/Filter_clear.png";
import Image from "next/image";
import s from "./index.module.scss";

const Filter = () => {
  return (
    <>
      <div className={s.filter_title_container}>
        <span>Фільтрування</span>
        <button className={s.filter_btn}>
          <Image src={filter} alt="filter_img" />
        </button>
      </div>
      <Accordion 
      AccordionTitle="Ціна"
      />
      
    </>
  );
};

export default Filter;
