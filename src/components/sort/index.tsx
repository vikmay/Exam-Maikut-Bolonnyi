import React from "react";
import s from "./index.module.scss";
import Accordion from "@/components/accordion2";

interface SortProps {
  onSortOptionChange: (option: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSortOptionChange }) => {
  const [selectedOption, setSelectedOption] =
    React.useState<string>("Сортувати за");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onSortOptionChange(newOption); // Notify parent component of change
  };

  return (
    <>
      <select
        className={s.select}
        value={selectedOption}
        onChange={handleChange}
      >
        <option className={s.option} value="Сортувати за">Сортувати за</option>
        <option  className={s.option} value="сортувати від А до Я">Алфавітом від А до Я</option>
        <option  className={s.option} value="від Я до А">Алфавітом від Я до А</option>
      </select>
    </>
  );
};

export default Sort;
