import React from "react";


interface SortProps {
  onSortOptionChange: (option: string) => void;
}

const Sort: React.FC<SortProps> = ({ onSortOptionChange }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('Сортувати за');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    onSortOptionChange(newOption); // Notify parent component of change
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="Сортувати за">Сортувати за</option>
      <option value="сортувати від А до Я">сортувати від А до Я</option>
      <option value="від Я до А">від Я до А</option>
    </select>
  );
};

export default Sort;
  
