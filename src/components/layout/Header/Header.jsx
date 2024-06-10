import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import styles from "./Header.module.css";
import { Container } from "../Container";
import { Logo } from "../../Logo";
import { AuthButtons } from "./components";
import { HeaderNav } from "./components";
import { UserBar } from "./components";
import { BurgerMenu } from "./components";

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
