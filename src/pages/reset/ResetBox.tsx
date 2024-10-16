import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Buttons from "../../components/basicComponents/Button";
import Inputs from "../../components/basicComponents/Input";
import { schema } from "../../components/reset/validationSchema";

interface IFormInput {
  password: string;
  rePassword: string;
}

const ResetPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<IFormInput> = (data) => {
    console.log(data.password, data.rePassword);
  };

  return (
    <>
      <form
        className="flex h-screen items-center justify-center"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div
          style={{
            boxShadow:
              "0px 50px 100px -20px rgba(3,35,37,0.25), 0px 30px 60px -30px rgba(0,0,0,0.3)",
          }}
          className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px]"
        >
          <p className="flex flex-col font-extrabold text-black justify-center w-fit p-2 text-[32px]">
            تغییر رمز عبور
          </p>
          <div className="w-full">
            <div className="mt-5 space-y-6">
              <Inputs
                id="password"
                type="password"
                label="رمز عبور جدید را وارد کنید"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.password.message}
                </p>
              )}

              <Inputs
                id="vpassword"
                type="password"
                label="تکرار رمز عبور"
                {...register("rePassword")}
              />
              {errors.rePassword && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.rePassword.message}
                </p>
              )}
            </div>
            <Buttons
              classNames="mt-5 w-full h-10"
              children={"اعمال تغییرات"}
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ResetPage;
