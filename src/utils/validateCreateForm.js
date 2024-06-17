import { showError } from "./showError";
import { schemaCreateForm } from "./validateSchemas";

export const validateFormData = async (formData) => {
  try {
    await schemaCreateForm.validate(formData);

    return true;
  } catch (error) {
    showError(error.message);
    return false;
  }
};
