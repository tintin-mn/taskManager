import { forwardRef } from "react";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

interface IInputProps {
  label: string;
  id: string;
  type: string;
  onChange?: (e: { target: { value: string; id: string } }) => void;
}

const Inputs = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, type, ...props }: IInputProps, ref) => {
    return (
      <div className="w-full">
        <Field>
          <Label htmlFor={id} className="text-sm/6 font-medium text-black">
            {label}
          </Label>
          <Input
            {...props}
            id={id}
            type={type}
            ref={ref}
            className={clsx(
              "mt-3 block w-full h-10 rounded-lg border border-gray-primary px-4",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:border-blue-primary"
            )}
          />
        </Field>
      </div>
    );
  }
);

export default Inputs;

// import { Field, Input, Label } from "@headlessui/react";
// import clsx from "clsx";

// interface IInputProps {
//   label: string;
//   id: string;
//   type: string;
//   onChange?: (e: { target: { value: string; id: string } }) => void;
// }

// const Inputs = ({ label, id,type, ...props }: IInputProps): JSX.Element => {

//   return (
//     <div className="w-full">
//       <Field>
//         <Label htmlFor={id} className="text-sm/6 font-medium text-black">
//           {label}
//         </Label>
//         <Input
//           {...props}
//           id={id}
//           type={type}
//           className={clsx(
//             "mt-3 block w-full h-10 rounded-lg border border-gray-primary px-4",
//             "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:border-blue-primary"
//           )}
//         />
//       </Field>
//     </div>
//   );
// };

// export default Inputs;
