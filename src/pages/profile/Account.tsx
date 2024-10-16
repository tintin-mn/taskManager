import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../components/profile/AccountValidationSchema";
import Form from "../../components/form/Form";

interface IFormInput {
  email: string;
  username: string;
  currentPassword: string;
  NewPassword: string;
  reNewPassword: string;
}

const Account = (): JSX.Element => {
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
      id: "email",
      label: "ایمیل",
      type: "email" as const,
      register: register("email"),
    },
    {
      id: "username",
      label: "نام کاربری",
      type: "text" as const,
      register: register("username"),
    },
    {
      id: "currentPassword",
      label: "رمز عبور فعلی",
      type: "password" as const,
      register: register("currentPassword"),
    },
    {
      id: "NewPassword",
      label: "رمز عبور جدید",
      type: "password" as const,
      register: register("NewPassword"),
    },
    {
      id: "reNewPassword",
      label: "تکرار رمز عبور جدید",
      type: "password" as const,
      register: register("reNewPassword"),
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h1 className="text-right text-2xl font-bold mb-4 ">اطلاعات حساب</h1>
      <Form submitText={"ثبت تغییرات"} fields={fields} errors={errors}></Form>
    </form>
  );
};

export default Account;
