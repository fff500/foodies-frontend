import * as yup from "yup";
import { INPUT_CONFIG } from "../../constants";

const { name, email, password } = INPUT_CONFIG;

export const validationSchema = yup.object({
  name: yup
    .string()
    .required(name.validation.required)
    .min(name.validation.minLength.value, name.validation.minLength.message),
  email: yup
    .string()
    .required(email.validation.required)
    .matches(email.validation.pattern.value, email.validation.pattern.message),
  password: yup
    .string()
    .required(password.validation.required)
    .min(
      password.validation.minLength.value,
      password.validation.minLength.message
    ),
});
