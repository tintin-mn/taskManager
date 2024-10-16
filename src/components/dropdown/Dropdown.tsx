import React, { useState } from "react";

interface DropdownProps {
  buttonContent: React.ReactNode;
  componentContent: React.ReactNode;
  ClassNames?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  buttonContent,
  componentContent,
  ClassNames,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block ${ClassNames}`}>
      <div className="dropdown dropdown-top">
        <div onMouseDown={toggleDropdown}>{buttonContent}</div>
        <ul
          className={`dropdown-content menu text-transparent ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {componentContent}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
