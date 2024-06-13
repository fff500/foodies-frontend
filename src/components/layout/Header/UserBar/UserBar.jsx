import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { openModal } from "../../../../redux";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../../../constants";
import { Button, Icon } from "../../../shared";
import styles from "./UserBar.module.css";

export const UserBar = ({ userName, userImage }) => {
  const dispatch = useDispatch();
  const handleLogoutRegisterModal = () => {
    dispatch(
      openModal({
        isOpen: true,
        modalType: "logout",
      }),
    );
  };
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.user} ref={ref} onClick={() => setOpen(!open)}>
      <img
        className={styles.userImage}
        src={userImage || DEFAULT_IMAGE_AVATAR_URL}
        alt={userName || "User avatar"}
      />
      <div className={styles.userDetails}>
        <p className={styles.userName}>{userName || "User"}</p>
        <Button className={styles.userButton} type="button">
          <Icon
            id={open ? "chevronDown" : "chevronUp"}
            className={styles.userIcon}
            width={18}
            height={18}
          />
        </Button>

        {open && (
          <div
            className={classnames(styles.select, {
              [styles.homeSelect]: isHomePage,
              [styles.otherPageSelect]: !isHomePage,
            })}
          >
            <div>
              <Link to="/user">Profile</Link>
            </div>
            <div>
              <Button
                type="button"
                className={styles.logoutButton}
                onClick={handleLogoutRegisterModal}
              >
                Log out
                <Icon
                  id={"arrowUpRight"}
                  className={styles.logoutIcon}
                  width={18}
                  height={18}
                />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
