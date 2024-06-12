import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../../../constants";
import sprite from "../../../../assets/icons/sprite.svg";
import styles from "./UserBar.module.css";
import { Button } from "../../../shared";

export const UserBar = ({ userName, userImage, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState("chevronUp");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleButtonIcon = () => {
    if (icon === "chevronUp") {
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
          <svg width="18" height="18" className={styles.userIcon}>
            <use xlinkHref={`${sprite}#${icon}`} />
          </svg>
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
                <svg width="18" height="18" className={styles.logoutIcon}>
                  <use xlinkHref={`${sprite}#arrowUpRight`} />
                </svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
