import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import { apiInstance } from "../../../api/";
import { openModal } from "../../../redux";
import styles from "./PrivateLink.module.css";
import { useLocalStorage } from "@mantine/hooks";

export const PrivateLink = ({ to, children, className, onSuccess }) => {
  const navigate = useNavigate();
  const [token] = useLocalStorage({ key: "token" });
  const dispatch = useDispatch();
  const getCurrent = () =>
    !token
      ? dispatch(
          openModal({
            isOpen: true,
            modalType: "login",
            to,
          })
        )
      : apiInstance
          .get("users/current")
          .then(() => {
            if (to) {
              navigate(to);
            }
            if (onSuccess) {
              onSuccess();
            }
          })
          .catch((e) => {
            dispatch(
              openModal({
                isOpen: true,
                modalType: "login",
                to,
              })
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
