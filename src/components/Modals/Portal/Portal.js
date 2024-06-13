import { createPortal } from "react-dom";

export const Portal = ({ children, portal = document.body }) =>
  createPortal(children, portal);
