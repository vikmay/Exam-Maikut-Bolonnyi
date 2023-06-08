import React, { FC } from "react";
import CheckboxDropdown from "../checkboxDropdown";

interface FilterProps {
  onColorChange: (selectedOptions: string[]) => void;
  onCountryChange: (selectedOptions: string[]) => void;
  onManufacturerChange: (selectedOptions: string[]) => void;
}

const Filter: FC<FilterProps> = ({ onColorChange, onCountryChange, onManufacturerChange }) => {
  const colorOptions = ["Red", "Blue", "Green"];
  const countryOptions = ["USA", "Germany", "China"];
  const manufacturerOptions = ["Manufacturer A", "Manufacturer B", "Manufacturer C"];

  return (
    <div>
      <CheckboxDropdown
        title="Color"
        options={colorOptions}
        onChange={onColorChange}
      />
      <CheckboxDropdown
        title="Country"
        options={countryOptions}
        onChange={onCountryChange}
      />
      <CheckboxDropdown
        title="Manufacturer"
        options={manufacturerOptions}
        onChange={onManufacturerChange}
      />
    </div>
  );
};

export default Filter;
