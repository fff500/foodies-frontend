import React, { useState } from "react";
import { Button } from "../../components";
import styles from "./User.module.css";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../constants";
import sprite from "../../assets/icons/sprite.svg";

const User = ({ userName, userImage }) => {
  const [icon, setIcon] = useState("chevronUp");

  const toggleButtonIcon = () => {
    if (icon === "chevronUp") {
      setIcon("chevronDown");
    } else {
      setIcon("chevronUp");
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
          <svg width="18" height="18">
            <use xlinkHref={`${sprite}#${icon}`} />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default User;
