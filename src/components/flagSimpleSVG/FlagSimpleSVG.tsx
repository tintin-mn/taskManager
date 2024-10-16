import React from "react";

export interface FlagSVGProps {
  className?: string;
  fillColor?: keyof typeof colorTheme;
}

export const colorTheme = {
  "gray-primary": "#8492a6",
  "red-primary": "#FA5252",
  "yellow-primary": "#FAB005",
  "blue-primary": "#228BE6",
  "green-primary": "#40C057",
  // "pink-primary": "#E64980",
  // "grape-primary": "#BE4BDB",
  // "violet-primary": "#7950F2",
  // "indigo-primary": "#4C6EF5",
  // "cyan-primary": "#15AABF",
  // "teal-primary": "#12B886",
  // "brand-primary": "#208D8E",
  // "lime-primary": "#82C91E",
  // "orange-primary": "#FD7E14",
};

const FlagSVG: React.FC<FlagSVGProps> = ({
  className = "",
  fillColor = "gray-primary",
}) => (
  <svg
    className={`p-1 ${className}`}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.42134 26.0294V5.11035"
      stroke={colorTheme[fillColor]}
      strokeWidth="2.3897"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.5786 17.4755V5.19611"
      stroke={colorTheme[fillColor]}
      strokeWidth="2.3897"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.42139 17.451C6.42139 17.451 7.49369 16.5601 10.7106 16.5601C13.9275 16.5601 16.0721 18.6765 19.289 18.6765C22.5059 18.6765 23.5782 17.4792 23.5782 17.4792"
      stroke={colorTheme[fillColor]}
      strokeWidth="2.3897"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.42139 5.11279C6.42139 5.11279 7.49369 3.97064 10.7106 3.97064C13.9275 3.97064 16.0721 6.08706 19.289 6.08706C22.5059 6.08706 23.5782 5.19613 23.5782 5.19613"
      stroke={colorTheme[fillColor]}
      strokeWidth="2.3897"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FlagSVG;
