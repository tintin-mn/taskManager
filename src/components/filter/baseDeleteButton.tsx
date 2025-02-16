import React from "react";

interface DeleteButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.0076 17.7544H6.33353C5.4896 17.7544 4.78834 17.1031 4.72547 16.2608L4.00244 6.46973H15.3145L14.6157 16.2567C14.5552 17.1007 13.8531 17.7544 13.0076 17.7544V17.7544Z"
          stroke="#FA5252"
          stroke-width="1.20907"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.67255 9.69385V14.5301"
          stroke="#FA5252"
          stroke-width="1.20907"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.22412 6.46967H16.1209"
          stroke="#FA5252"
          stroke-width="1.20907"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.7026 6.46967L12.886 4.29173C12.6499 3.66221 12.0486 3.24548 11.3763 3.24548H7.96834C7.2961 3.24548 6.69479 3.66221 6.45862 4.29173L5.64209 6.46967"
          stroke="#FA5252"
          stroke-width="1.20907"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.4372 9.69385L12.0906 14.5301"
          stroke="#FA5252"
          stroke-width="1.20907"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.90795 9.69385L7.25455 14.5301"
          stroke="#FA5252"
          stroke-width="1.20907"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default DeleteButton;
