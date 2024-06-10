import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import { Logo } from "../../shared/Logo";
import { Container } from "../Container";
import { HeaderNav } from "./HeaderNav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButtons } from "./AuthButtons";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";

export const Header = () => {
  const [isLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <HeaderNav />
              <UserBar />
              <BurgerMenu isHomePage={isHomePage} onClick={handleMenuToggle} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
