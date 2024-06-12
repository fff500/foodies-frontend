import React, { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Logo } from "../../shared/Logo";
import { Container } from "../Container";
import { HeaderNav } from "./HeaderNav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButtons } from "./AuthButtons";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";
import { BurgerModal, LogOutModal } from "../../Modals";

export const Header = ({ isHomePage }) => {
  const [isLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // delete me start
  const [open, setOpen] = useState(false);
  const onClickModal = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // delete me end

  return (
    <header
      className={classnames(styles.header, {
        [styles.homePageHeader]: isHomePage,
      })}
    >
      <Container>
        <div className={styles.headerContentWrapper}>
          <Link to="/">
            <Logo />
          </Link>
          {isLoggedIn ? (
            <div className={styles.authButtonsWrapper}>
              <AuthButtons />
            </div>
          ) : (
            <>
              {/* delete me start */}
              <button type="button" onClick={onClickModal}>
                modal
              </button>
              <LogOutModal open={open} onClose={onClose} />
              {/* delete me start */}

              <HeaderNav />
              <UserBar />
              <BurgerMenu
                isHomePage={isHomePage}
                handleMenuToggle={handleMenuToggle}
              />
              <BurgerModal open={isMenuOpen} onClose={handleMenuToggle} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
