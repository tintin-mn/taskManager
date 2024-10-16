import * as yup from "yup";

const schema = yup.object().shape({
    projectName: yup.string().required("لطفا نام فضای کاری خود را وارد کنید"),
});

export default schema;
