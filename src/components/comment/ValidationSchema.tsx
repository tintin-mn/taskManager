import * as yup from "yup";

const schema = yup.object().shape({
  // comment: yup.string().trim().required("این فیلد ضروری است"),
});

export default schema;
