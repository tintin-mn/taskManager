import { createBrowserRouter } from "react-router-dom";
import ResetPage from "../pages/reset/Reset";
import ForgetPage from "../pages/forget/Forget";
import SignupPage from "../pages/signup/Signup";
import LoginPage from "../pages/login/Login";
import App from "../App";
import AuthLayout from "../layouts/AuthLayout.tsx";
import ComponentM from "../components/component-M/ComponentM.tsx";
import ComponentA from "../components/component-A/ComponentA.tsx";
import NewBoard from "../pages/newBoard/newBoard.tsx";
import ComponentT from "../components/component-T/ComponentT.tsx";
import Profile from "../pages/profile/profile.tsx";
import View from "../pages/workspace/View.tsx";

export const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: (
      <AuthLayout isSignIn>
        <LoginPage />,
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout isSignIn={false}>
        <SignupPage />
      </AuthLayout>
    ),
  },
  {
    path: "/forget",
    element: (
      <AuthLayout isSignIn={false}>
        <ForgetPage />
      </AuthLayout>
    ),
  },
  {
    path: "/reset",
    element: (
      <AuthLayout isSignIn={false}>
        <ResetPage />
      </AuthLayout>
    ),
  },
  {
    path: "/dashboard",
    element: <NewBoard />,
  },
  {
    path: "/tina",
    element: <ComponentT />,
  },
  {
    path: "/mohammad",
    element: <ComponentM />,
  },
  {
    path: "/arezoo",
    element: <ComponentA />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/workspaces-projects",
    element: <View />,
  },
]);

export default routerPath;
