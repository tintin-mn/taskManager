import { Link, useNavigate } from "react-router-dom";
import Inputs from "../../components/basicComponents/Input";
import Buttons from "../../components/basicComponents/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/login/validationSchema";
// import { login } from "../../configs/services/authSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { login as loginUser } from "../../configs/services/authSlice";
// import { toast } from "react-toastify";


export interface IFormInput {
  username: string;
  password: string;
}

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { isSuccess, isError, message } = useAppSelector(
  //   (state) => state.auth
  // );
  // const onSubmitHandler: SubmitHandler<IFormInput> = (data) => {
  //   console.log(data);
  //   login
  // };
  const onSubmitHandler: SubmitHandler<IFormInput> = (data) => {

    // console.log("efknqjfnqekjf",isError);
    // console.log("ofbqjbej",isSuccess);
    // console.log({isError,isSuccess})
    // if (isError) {
    //   toast.dismiss();
    //   toast.error(`${message}`, {});
    // }
    // if (isSuccess) {
    //   toast.dismiss();
    //   toast.success(`ورود با موفقیت انجام شد`, {
    //     autoClose: 1000,
    //     rtl: true,
    //   });
      navigate("/dashboard");
    // }
    dispatch(
      loginUser({
        username: data.username.toLowerCase(),
        password: data.password,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div
        style={{
          boxShadow:
            "0px 50px 100px -20px rgba(3,35,37,0.25), 0px 30px 60px -30px rgba(0,0,0,0.3)",
        }}
        className="flex bg-white flex-col justify-center items-center p-6 w-[640px] rounded-[20px]"
      >
        <p className="font-extrabold text-black justify-center w-fit pb-2 text-[32px]">
          به کوئرا تسک منیجر خوش برگشتی:)
        </p>

        <div className="py-2 space-y-5 w-full">
          <Inputs
            label="نام کاربری"
            id="username"
            type="text"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-2">
              {errors.username.message}
            </p>
          )}
          <Inputs
            label="رمز عبور"
            id="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-2">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="w-full underline mt-2">
          <Link to="/forget">رمز عبور خود را فراموش کرده اید؟</Link>
        </div>
        <Buttons
          classNames="mt-8 w-full h-10"
          children={"ورود"}
          type="submit"
        />
        <div className="flex gap-2 mt-6">
          <div className="font-medium">ثبت نام نکرده ای؟</div>
          <Link to="/signup" className="text-brand-primary font-extrabold">
            ثبت نام
          </Link>
        </div>
      </div>
    </form>
  );
};
export default Login;
