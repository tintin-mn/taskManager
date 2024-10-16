import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import close from "/componentT/close.svg";
import schema from "./NewProjectValidation.tsx";
import FormComponent from "../form/Form.tsx";

interface IFormInput {
  projectName: string;
}

const NewProject = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const fields = [
    {
      id: "projectName",
      label: "نام پروژه",
      type: "text" as const,
      register: register("projectName"),
    },
  ];

  return (
    <div className="px-10 pb-6 bg-white flex items-center justify-center border rounded-lg">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="text-center text-2xl font-bold mb-4">
          <img src={close} alt="icon" className="relative top-7 left-5" />
          <span> ساختن پروژه جدید</span>
        </div>
        <FormComponent
          submitText={"ادامه"}
          fields={fields}
          errors={errors}
        ></FormComponent>
      </form>
    </div>
  );
};

export default NewProject;
