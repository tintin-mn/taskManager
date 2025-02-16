import React from "react";

interface CustomSVGProps {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
  stroke?: string;
}

const ColorPoletSVG: React.FC<CustomSVGProps> = ({
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
      d="M5.11742 3.10133C5.0526 3.10133 5.00014 3.15379 5.00099 3.21861C5.00099 3.28344 5.05345 3.3359 5.11828 3.3359C5.1831 3.3359 5.23556 3.28344 5.23556 3.21861C5.23471 3.15379 5.18268 3.10133 5.11742 3.10133"
      stroke={stroke}
      strokeWidth="0.639729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.95299 5.4995C2.95299 5.43468 2.90054 5.38222 2.83614 5.38307C2.77131 5.38307 2.71885 5.43553 2.71885 5.50036C2.71885 5.56518 2.77131 5.61764 2.83614 5.61764C2.90096 5.61764 2.95299 5.56476 2.95299 5.4995"
      stroke={stroke}
      strokeWidth="0.639729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.81401 3.8036C6.76838 3.75797 6.69417 3.75797 6.64896 3.80403C6.60333 3.84967 6.60333 3.92387 6.64896 3.96951C6.6946 4.01514 6.76881 4.01514 6.81444 3.96951C6.86007 3.92345 6.86007 3.84967 6.81401 3.8036"
      stroke={stroke}
      strokeWidth="0.639729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.58672 7.03066C3.54108 6.98502 3.46688 6.98502 3.42167 7.03108C3.37603 7.07672 3.37603 7.15092 3.42167 7.19656C3.4673 7.24219 3.54151 7.24219 3.58715 7.19656C3.63278 7.15092 3.63278 7.07672 3.58672 7.03066"
      strokeWidth="0.639729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.58711 3.96892C3.63275 3.92329 3.63275 3.84908 3.58669 3.80387C3.54105 3.75824 3.46685 3.75824 3.42121 3.80387C3.37558 3.84951 3.37558 3.92371 3.42121 3.96935C3.46685 4.01498 3.54105 4.01498 3.58711 3.96892"
      stroke={stroke}
      strokeWidth="0.639729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.11784 9.33866C2.96196 9.33866 1.22104 7.56107 1.28118 5.39153C1.33662 3.38876 3.00631 1.71906 5.00909 1.66362C7.17862 1.60349 8.95622 3.3444 8.95622 5.50029V5.92677C8.95622 6.39804 8.57451 6.77975 8.10324 6.77975H7.2234C6.6566 6.77975 6.2476 7.32224 6.40327 7.86686L6.51288 8.25112C6.66897 8.79617 6.25954 9.33866 5.69317 9.33866H5.11784Z"
      stroke={stroke}
      strokeWidth="0.639729"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ColorPoletSVG;
