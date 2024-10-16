import React from "react";

interface CustomSVGProps {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  stroke?: string;
}

const EditSVG: React.FC<CustomSVGProps> = ({
  fill = "none",
  width = "2px",
  height = "2px",
  className = "",
  stroke = "#BDBDBD",
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 11 11"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99814 5.08777V8.38794C8.99814 8.84377 8.62893 9.21298 8.17309 9.21298H2.3978C1.94196 9.21298 1.57275 8.84377 1.57275 8.38794V2.61264C1.57275 2.1568 1.94196 1.7876 2.3978 1.7876H5.28544"
      stroke={stroke}
      strokeWidth="0.618782"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.04785 6.73775L5.34729 6.57728C5.43846 6.56614 5.52344 6.52448 5.58862 6.45971L8.73657 3.31176C9.08515 2.96318 9.08515 2.39803 8.73657 2.04903V2.04903C8.38799 1.70045 7.82283 1.70045 7.47384 2.04903L4.35518 5.16769C4.29206 5.23081 4.25122 5.31249 4.23844 5.40118L4.04785 6.73775Z"
      stroke={stroke}
      strokeWidth="0.618782"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EditSVG;
