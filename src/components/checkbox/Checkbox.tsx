import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  colorClass: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  colorClass,
  className,
}) => {
  return (
    <label
      className={`inline-flex items-center cursor-pointer m-[6.68px] ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`relative transition-all duration-300 ${
          checked
            ? `size-7 rounded-[12px] ${colorClass} bg-opacity-100`
            : `size-5 rounded-[8px] hover:size-6 hover:rounded-[10px] ${colorClass}`
        }`}
        style={{
          borderColor: colorClass.replace("bg-", "border-"),
          borderWidth: "2px",
        }}
      >
        {checked && (
          <span className="absolute inset-0 m-auto size-3 rounded-full bg-white"></span>
        )}
      </span>
    </label>
  );
};

export default Checkbox;
