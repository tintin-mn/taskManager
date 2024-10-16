import React from "react";

interface CustomSVGProps {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  stroke?: string;
}

const SharingSVG: React.FC<CustomSVGProps> = ({
  fill = "#c9cbda",
  width = "2px",
  height = "2px",
  className = "",
  stroke = "#BDBDBD",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill={fill}
    stroke={stroke}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.53 8.02002L9.46997 11.06"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4049 5.14203C17.1984 5.93558 17.1984 7.22217 16.4049 8.01571C15.6113 8.80926 14.3247 8.80926 13.5312 8.01571C12.7376 7.22217 12.7376 5.93557 13.5312 5.14203C14.3247 4.34849 15.6113 4.34849 16.4049 5.14203"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.53 16.9799L9.46997 13.9399"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4049 16.9838C17.1984 17.7774 17.1984 19.064 16.4049 19.8575C15.6113 20.6511 14.3247 20.6511 13.5312 19.8575C12.7376 19.064 12.7376 17.7774 13.5312 16.9838C14.3247 16.1903 15.6113 16.1903 16.4049 16.9838"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.46542 11.0643C10.2582 11.8571 10.2582 13.1424 9.46542 13.9351C8.67266 14.7279 7.38733 14.7279 6.59457 13.9351C5.80181 13.1424 5.80181 11.8571 6.59457 11.0643C7.38734 10.2715 8.67266 10.2715 9.46542 11.0643"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SharingSVG;
