import * as yup from "yup";
export const schema = yup.object().shape({
  password: yup
    .string()
    .required("رمز عبور جدید را وارد کنید")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد"
    ),
  rePassword: yup
    .string()
    .oneOf([yup.ref("password")], "تکرار رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور را وارد کنید"),
});
