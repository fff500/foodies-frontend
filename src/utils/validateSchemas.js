import * as Yup from "yup";

export const schemaCreateForm = Yup.object().shape({
  title: Yup.string().required(),
  category: Yup.string().required(),
  area: Yup.string().required(),
  instructions: Yup.string().required(),
  description: Yup.string().required(),
  time: Yup.string().required().min(1),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string().required(),
        measure: Yup.string().required(),
      })
    )
    .required(),
});
