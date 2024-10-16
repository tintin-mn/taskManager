import { Button } from "@headlessui/react";
import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const RedButton = ({
  children,
  classNames,
  type = "button",
}: IButtonProps): JSX.Element => {
  return (
    <Button
      type={type}
      className={`bg-red-primary text-white h-[30px] w-[111px] text-xs rounded ${classNames}`}
    >
      {children}
    </Button>
  );
};

export default RedButton;
