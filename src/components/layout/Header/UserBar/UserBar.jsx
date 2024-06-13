import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../../../constants";
import { Button, Icon } from "../../../shared";
import { LogOutModal } from "../../../Modals";
import styles from "./UserBar.module.css";

export const UserBar = ({ userName, userImage, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconId, setIcon] = useState("chevronUp");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIcon(isMenuOpen ? "chevronUp" : "chevronDown");
  };

  const openLogOutModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeLogOutModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    closeLogOutModal();
  };

  return (
    <div className={styles.user}>
      <img
        loading="lazy"
        className={styles.userImage}
        src={userImage || DEFAULT_IMAGE_AVATAR_URL}
        alt={userName || "User avatar"}
      />
      <div className={styles.userDetails}>
        <p className={styles.userName}>{userName || "User"}</p>
        <Button
          className={styles.userButton}
          type="button"
          onClick={toggleMenu}
        >
          <Icon
            id={iconId}
            className={styles.userIcon}
            width={18}
            height={18}
          />
        </Button>

        {isMenuOpen && (
          <div
            className={classnames(styles.select, {
              [styles.homeSelect]: isHomePage,
              [styles.otherPageSelect]: !isHomePage,
            })}
            onBlur={() => setIsMenuOpen(false)}
          >
            <div className={styles.option} onClick={() => setIsMenuOpen(false)}>
              <Link to="/user">Profile</Link>
            </div>
            <div className={styles.option} onClick={openLogOutModal}>
              <Button type="button" className={styles.logoutButton}>
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
      <LogOutModal
        isOpen={isModalOpen}
        onClose={closeLogOutModal}
        onLogout={handleLogout}
      />
    </div>
  );
};
