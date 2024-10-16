import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("لطفا ایمیل خود را وارد کنید"),
  username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  currentPassword: yup
    .string()
    .required("رمز عبور جدید را وارد کنید")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "رمز عبور باید حداقل شامل یک حرف کوچک، یک حرف بزرگ، یک عدد و یک علامت خاص باشد"
    ),
  NewPassword: yup
    .string()
    .oneOf([yup.ref("NewPassword")], "تکرار رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور را وارد کنید"),

  reNewPassword: yup
    .string()
    .oneOf([yup.ref("NewPassword")], "تکرار رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور را وارد کنید"),
});

export default schema;
