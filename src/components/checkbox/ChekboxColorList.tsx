import React, { useState } from "react";
import Checkbox from "./Checkbox.tsx";

interface ColorCheckboxesListProps {
  className?: string;
  onColorChange: (color: string | null) => void;
}

const ColorCheckboxesList: React.FC<ColorCheckboxesListProps> = ({
  className,
  onColorChange,
}) => {
  const colorTheme = [
    "bg-red-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-violet-500",
    "bg-indigo-500",
    "bg-blue-500",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-emerald-500",
    "bg-green-500",
    "bg-lime-500",
    "bg-yellow-500",
    "bg-orange-500",
  ];

  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(
    null
  );

  const handleChange = (index: number) => {
    if (selectedColorIndex === index) {
      setSelectedColorIndex(null);
      onColorChange(null);
    } else {
      setSelectedColorIndex(index);
      onColorChange(colorTheme[index]);
    }
  };

  return (
    <div className={`${className}`}>
      {colorTheme.map((colorClass, index) => (
        <Checkbox
          key={index}
          checked={selectedColorIndex === index}
          onChange={() => handleChange(index)}
          colorClass={colorClass}
        />
      ))}
    </div>
  );
};

export default ColorCheckboxesList;
