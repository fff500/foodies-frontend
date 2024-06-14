import profileAvatarPlaceholder from "../assets/images/profile-avatar-placeholder.png";
export const PROJECT_NAME = "Foodies";
export const DEFAULT_IMAGE_AVATAR_URL = profileAvatarPlaceholder;
export const MODALS = {
  signIn: "SIGN IN",
  signUp: "SIGN UP",
  logOut: "LOG OUT",
};
export const INPUT_CONFIG = {
  name: {
    name: "name",
    type: "text",
    placeholder: "Name*",
    validation: {
      required: "Email is required",
      minLength: {
        value: 3,
        message: "Atleast 3 symbols.",
      },
    },
  },
  email: {
    name: "email",
    type: "email",
    placeholder: "Email*",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: "Email should match example 'some@mail.box'",
      },
    },
  },
  password: {
    name: "password",
    type: "password",
    placeholder: "Password*",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Atleast 6 symbols.",
      },
    },
  },
};
