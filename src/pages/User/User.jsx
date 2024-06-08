import React from "react";
import { Button } from "../../components";
import styles from "./User.module.css";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../constants";

const User = ({ userName, userImage }) => {
  const toggleButtonIcon = () => {};
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
          <svg
            className={styles.userButtonIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M4.5 6.75L9 11.25L13.5 6.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default User;
