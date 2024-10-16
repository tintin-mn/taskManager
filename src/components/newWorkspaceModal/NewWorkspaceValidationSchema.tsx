import * as yup from "yup";

const schema = yup.object().shape({
    newWorkspace: yup.string().required("لطفا نام فضای کاری خود را وارد کنید"),
});

export default schema;
