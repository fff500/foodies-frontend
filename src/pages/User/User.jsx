// import { Button } from "../../components";
// import sprite from "../../assets/icons/sprite.svg";
// import { nanoid } from "@reduxjs/toolkit";
import styles from "./User.module.css";

export const User = () => {
  return (
    <div className={styles.userProfile}>
      {/* <img
        src="../../assets/images/profileAvatarPlaceholder.png"
        alt="Profile Avatar Placeholder"
      />
      <Button>
        <svg width="18" height="18">
          <use xlinkHref={`${sprite}#plus`} />
        </svg>
      </Button>
      <h1 className={styles.title}>{"User Name"}</h1>
      <p className={styles.subtitle}>
        Email:<span className={styles.email}>{"User Email"}</span>
      </p>
      <ul className={styles.userSocialLinks}>
        {filterCategories.map(({ filterName, value }) => (
          <li className={styles.socialLinkItem} key={nanoid()}>
            <p className={styles.subtitle}>
              {filterName}
              <span> {value}</span>
            </p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
