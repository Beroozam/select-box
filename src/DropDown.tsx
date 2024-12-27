import React, { useState } from "react";
import "./Dropdown.css";
import { Option } from "./types";
import { options } from "./helpers";
import {FiChevronDown,FiChevronUp} from 'react-icons/fi'
import { OptionComponent } from "./Option";

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setIsOpen(true);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setSearchValue(option.label);
    setIsOpen(false);
  };


  return (
    <div className="dropdown">
      <div className="dropdown-input-container" onClick={handleToggleDropdown}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search or select..."
          className="dropdown-input"
        />
        <span className={`dropdown-caret ${isOpen ? "open" : ""}`}>
            {isOpen ? <FiChevronUp size={20} color="#007bff" /> : <FiChevronDown size={20} color="#007bff" />}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {filteredOptions.map((option) => (
            <OptionComponent
                key={option.label}
                option={option}
                selectedOption={selectedOption}
                handleOptionSelect={handleOptionSelect}
            />
          ))}
          {filteredOptions.length === 0 && (
            <div className="dropdown-no-options">No options found</div>
          )}
        </div>
      )}
      {isOpen&&<div className="dropdown-overlay" onClick={()=>setIsOpen(false)}></div>}
    </div>
  );
};

export default DropDown;
