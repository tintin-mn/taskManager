import React from "react";
import { Field, Fieldset } from "@headlessui/react";
import Inputs from "../basicComponents/Input";
import Buttons from "../basicComponents/Button";
import { UseFormRegister } from "react-hook-form";

interface TextFieldProps {
  id: string;
  label: string;
  type: "text";
  register: ReturnType<UseFormRegister<any>>;
}

interface EmailFieldProps {
  id: string;
  label: string;
  type: "email";
  register: ReturnType<UseFormRegister<any>>;
}

interface PasswordFieldProps {
  id: string;
  label: string;
  type: "password";
  register: ReturnType<UseFormRegister<any>>;
}

type FieldProps = TextFieldProps | EmailFieldProps | PasswordFieldProps;

interface FormComponentProps {
  fields: FieldProps[];
  submitText: string;
  errors: Record<string, any>;
}

const FormComponent: React.FC<FormComponentProps> = ({
  fields,
  submitText,
  errors,
}: FormComponentProps) => {
  return (
    <Fieldset className="w-[354px]">
      {fields.map((field) => (
        <Field key={field.id}>
          <Inputs
            id={field.id}
            type={field.type}
            label={field.label}
            {...field.register}
          ></Inputs>
          {errors[field.id]?.message && (
            <p className="text-red-500 text-xs mt-2">
              {errors[field.id]?.message}
            </p>
          )}
        </Field>
      ))}
      <Buttons type="submit" classNames="mt-6 w-full h-10">
        {submitText}
      </Buttons>
    </Fieldset>
  );
};

export default FormComponent;
