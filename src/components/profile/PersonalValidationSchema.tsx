import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("لطفا نام خود را وارد کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  phoneNumber: yup.string().required("لطفا شماره موبایل خود را وارد کنید"),
  avatarURL: yup.string().url("آواتار نامعتبر است").notRequired(),
});

export default schema;
