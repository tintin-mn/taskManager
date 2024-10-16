import axios from "axios";
import { IFormInput as IFormInputSignup } from "../../pages/signup/SignupBox";
import { IFormInput as IFormInputLogin } from "../../pages/login/LoginBox";

const API_URL = "http://185.8.174.74:8000/accounts";

// Regiter users
const signup = async (userData: IFormInputSignup) => {
  const response = await axios.post(API_URL + "/", userData);
  return response.data;
};

// Login user
const login = async (userData: IFormInputLogin) => {
  const response = await axios.post(API_URL + "/login/", userData);
  console.log("get in login authservice");
  if (response) {
    console.log(response.data.access);
    localStorage.setItem(
      "authToken",
      JSON.stringify({
        accessToken: response.data.access,
        refreshToken: response.data.refresh,
      })
    );
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: response.data.user_id,
        username: response.data.username,
        email: response.data.email,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        phone_number: response.data.phone_number,
      })
    );
  }
  return response.data;
};

// // Forgot password
// const forgot = async (userEmail: FieldValues) => {
//   const response = await axios.post(API_URL + "/forget-password", userEmail);

//   return response.data;
// };

const authService = {
  signup,
  login,
  // forgot,
};

export default authService;
