import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل معتبر نیست")
    .required("وارد کردن ایمیل الزامی است"),
});
