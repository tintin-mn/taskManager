import * as yup from "yup";

export const schema = yup.object().shape({
  username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  email: yup
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("لطفا ایمیل خود را وارد کنید"),
  password: yup
    .string()
    .required("رمز عبور جدید را وارد کنید")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد"
    ),
  isChecked: yup
    .bool()
    .oneOf([true], "لطفا قوانین و مقررات را مطالعه و تایید نمایید"),
});
