import { Link } from "react-router-dom";
import Button from "../components/basicComponents/Button.tsx";
import React from "react";

interface IAuthProps {
  isSignIn: boolean;
  children: React.ReactNode;
}

const AuthLayout = ({ isSignIn, children }: IAuthProps) => {
  return (
    <div className="h-screen overflow-hidden relative flex flex-col items-center justify-center">
      <header className="flex items-center justify-between px-20 mt-20 fixed top-0 w-full z-10">
        <h1 className="font-black text-2xl bg-gradient-to-r from-[#118C80] to-[#4AB7D8] text-transparent bg-clip-text">
          کوئرا تسک منیجر
        </h1>
        <div className="flex items-center justify-center gap-x-2">
          <p className="font-medium">
            {isSignIn ? "ثبت نام نکرده ای؟" : "حساب کاربری دارید؟"}
          </p>
          <Link to={isSignIn ? "/signup" : "/login"}>
            <Button classNames="w-24">{isSignIn ? "ثبت نام" : "ورود"}</Button>
          </Link>
        </div>
      </header>
      <div className="z-20">{children}</div>
      <img
        className="absolute -bottom-32 z-0 w-full"
        src="/authentication-imgs/loginbg.svg"
        alt="loginbg"
      />
    </div>
  );
};

export default AuthLayout;
