import React from "react";

interface AddButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddButtonSVGIcon: React.FC<AddButtonProps> = ({
  className = "",
  onClick = () => {},
}) => (
  <button
    className={`items-center justify-center ${className}`}
    onClick={onClick}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="3" fill="#208D8E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 20H6C4.895 20 4 19.105 4 18V6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V16"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12H8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default AddButtonSVGIcon;
