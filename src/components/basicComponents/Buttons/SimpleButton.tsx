import { Button } from "@headlessui/react";
import React from "react";

export enum FlexDirection {
  Row = "row",
  RowReverse = "row-reverse",
}

interface IButtonProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  isOpen?: boolean;
  icon?: JSX.Element | string;
  flexDirection?: FlexDirection; // استفاده از enum برای جهت
}

const SimpleButton = ({
  children,
  onClick,
  classNames,
  type = "button",
  isOpen = false,
  icon,
  flexDirection = FlexDirection.Row, // پیش‌فرض row
}: IButtonProps): JSX.Element => {
  const flexDirectionStyle = { flexDirection };

  return (
    <Button
      type={type}
      onClick={onClick}
      className={`flex border-[1.5px] bg-white rounded-[6px] pt-[3px] pr-[12px] pb-[2px] pl-[12px] text-xs font-normal ${classNames}`}
      style={flexDirectionStyle}
    >
      {isOpen &&
        icon &&
        (typeof icon === "string" ? (
          <img src={icon} className="size-[18px]" alt="icon" />
        ) : (
          <span className="size-[18px]">{icon}</span>
        ))}
      <span>{children}</span>
    </Button>
  );
};

export default SimpleButton;
