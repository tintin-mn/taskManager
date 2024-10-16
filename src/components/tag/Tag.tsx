import React from "react";

interface TagProps {
  text: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className }) => {
  return (
    <label
      className={`font-extrabold text-xs rounded-[35px] p-[5px] flex items-center justify-center mt-[5px]  h-6 w-[61px] ${className}`}
    >
      {text}
    </label>
  );
};

export default Tag;
