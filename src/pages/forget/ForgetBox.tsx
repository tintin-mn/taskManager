import { useRef, useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Buttons from "../../components/basicComponents/Button";
import Inputs from "../../components/basicComponents/Input";
import { schema } from "../../components/forget/validationSchema";

interface IFormInput {
  email: string;
}

const ForgetPage = (): JSX.Element => {
  const isEmailValidRef = useRef(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFormInput>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<IFormInput> = useCallback((data) => {
    const isValidEmail = checkEmailWithServer(data.email);

    if (isValidEmail) {
      isEmailValidRef.current = true;
      setServerError(null);
      console.log(data.email);
    } else {
      isEmailValidRef.current = false;
      setServerError("ایمیل وارد شده معتبر نمی‌باشد.");
    }
  }, []);

  const checkEmailWithServer = (email: string): boolean => {
    //لاجیک چک کردن یامیل براساس نام کاربری از سرور رو میشه اینجا ست کرد
    // فعلا برای تست
    return email === "safari@gmail.com";
  };

  return (
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
          فراموشی رمز عبور
        </p>
        {!isEmailValidRef.current ? (
          <div className="w-full">
            <div className="mt-8">
              <Inputs
                id="email"
                type="email"
                label="ایمیل خود را وارد کنید"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email.message}
                </p>
              )}
              {serverError && (
                <p className="text-red-500 text-xs mt-2">{serverError}</p>
              )}
            </div>
            <Buttons type="submit" classNames="mt-5 w-full h-10">
              دریافت ایمیل بازیابی رمز عبور
            </Buttons>
            <div className="mt-6">
              <Link
                to="/login"
                className="text-brand-primary text-center block text-sm font-extrabold"
              >
                بازگشت
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px]">
            <label>
              لینک تغییر رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
              کنید.
            </label>
          </div>
        )}
      </div>
    </form>
  );
};

export default ForgetPage;
