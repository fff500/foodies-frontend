import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../../../constants";
import { Button, Icon } from "../../../shared";
import styles from "./UserBar.module.css";

export const UserBar = ({ userName, userImage, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconId, setIcon] = useState("chevronUp");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleButtonIcon = () => {
    if (iconId === "chevronUp") {
      setIcon("chevronDown");
    } else {
      setIcon("chevronUp");
    }
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (value) => {
    setIsOpen(false);
    if (value === "profile") {
      setIcon("chevronDown");
    } else if (value === "logout") {
      onLogout();
      setIcon("chevronDown");
    }
  };

  return (
    <div className={styles.user}>
      <img
        className={styles.userImage}
        src={userImage || DEFAULT_IMAGE_AVATAR_URL}
        alt={userName || "User avatar"}
      />
      <div className={styles.userDetails}>
        <p className={styles.userName}>{userName || "User"}</p>
        <Button
          className={styles.userButton}
          type="button"
          onClick={toggleButtonIcon}
        >
          <Icon
            id={iconId}
            className={styles.userIcon}
            width={18}
            height={18}
          />
        </Button>

        {isOpen && (
          <div
            className={classnames(styles.select, {
              [styles.homeSelect]: isHomePage,
              [styles.otherPageSelect]: !isHomePage,
            })}
            onBlur={() => setIsOpen(false)}
          >
            <div
              className={styles.option}
              onClick={() => handleSelectChange("profile")}
              value="profile"
            >
              <Link to="/user">Profile</Link>
            </div>
            <div
              className={styles.option}
              onClick={() => handleSelectChange("logout")}
              value="logout"
            >
              <Button
                type="button"
                className={styles.logoutButton}
                onClick={() => handleSelectChange("logout")}
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
