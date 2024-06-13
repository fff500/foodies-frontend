import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import { apiInstance } from "../../../api/";
import { openModal } from "../../../redux";
import styles from "./PrivateLink.module.css";

export const PrivateLink = ({ to = "/", children, className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getCurrent = () =>
    apiInstance
      .get("users/current")
      .then(() => navigate(to))
      .catch((e) => {
        dispatch(
          openModal({
            isOpen: true,
            modalType: "login",
            to,
          }),
        );
      });
  return (
    <div
      role="link"
      onClick={() => getCurrent()}
      className={classnames(styles.container, className)}
    >
      {children}
    </div>
  );
};
