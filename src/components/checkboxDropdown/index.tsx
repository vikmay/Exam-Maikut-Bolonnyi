import React, { FC, useState, useEffect } from "react";

interface CheckboxDropdownProps {
  title: string;
  options: string[];
  onChange: (selectedOptions: string[]) => void;
}

const CheckboxDropdown: FC<CheckboxDropdownProps> = ({ title, options, onChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSelectedOptions((prevState) => {
      if (checked) {
        return [...prevState, name];
      } else {
        return prevState.filter((option) => option !== name);
      }
    });
  };

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions, onChange]);

  return (
    <div className="dropdown">
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
        {title}
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div key={option}>
              <input
                type="checkbox"
                name={option}
                checked={selectedOptions.includes(option)}
                onChange={handleCheckboxChange}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
