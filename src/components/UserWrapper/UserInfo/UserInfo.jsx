import React from "react";
import styles from "./UserInfo.module.css";

export const UserInfo = ({ userData }) => {
  return (
    <div className={styles.userInfo}>
      <img src={userData.avatar} alt="User avatar" className={styles.avatar} />
      <h2 className={styles.name}>{userData.name}</h2>
      <div className={styles.stats}>
        <div>
          <span className={styles.statLabel}>Email:</span>
          <span className={styles.statValue}>{userData.email}</span>
        </div>
        <div>
          <span className={styles.statLabel}>Added recipes:</span>
          <span className={styles.statValue}>{userData.addedRecipes || 0}</span>
        </div>
        <div>
          <span className={styles.statLabel}>Favorites:</span>
          <span className={styles.statValue}>{userData.favorites || 0}</span>
        </div>
        <div>
          <span className={styles.statLabel}>Followers:</span>
          <span className={styles.statValue}>{userData.followers || 0}</span>
        </div>
        <div>
          <span className={styles.statLabel}>Following:</span>
          <span className={styles.statValue}>{userData.following || 0}</span>
        </div>
      </div>
    </div>
  );
};
