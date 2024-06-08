import { Button } from "../../components";
import styles from "./User.module.css";
const User = ({ userName, userImage }) => {
  const toggleButtonIcon = () => {};
  return (
    <div className={styles.user}>
      <img className={styles.userImage} src={userImage} alt={userName} />
      <div className={styles.userDetails}>
        <p className={styles.userName}>{userName}</p>
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default User;
