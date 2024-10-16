import { Button } from "@headlessui/react";
import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  classNames?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Buttons = ({
  children,
  classNames,
  type = "button",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <Button
      {...props}
      type={type}
      className={`items-center gap-2 rounded-md bg-brand-primary hover:bg-brand-primary/90 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white ${classNames}`}
    >
      {children}
    </Button>
  );
};

export default Buttons;

// import { Button } from "@headlessui/react";
// import React from "react";

// interface IButtonProps {
//   children: React.ReactNode;
//   classNames?: string;
//   onClick?: () => void;
// }

// const Buttons = ({
//   children,
//   classNames,
//   ...props
// }: IButtonProps): JSX.Element => {
//   return (
//     <Button
//       {...props}
//       className={`items-center gap-2 rounded-md bg-brand-primary hover:bg-brand-primary/90 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white ${classNames}`}
//     >
//       {children}
//     </Button>
//   );
// };

// export default Buttons;
