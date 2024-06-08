import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderNav } from "../../HeaderNav";
import User from "../../../pages/User";
import { Logo } from "../../Logo";
import { Container } from "../Container";
import { BurgerMenu } from "../../BurgerMenu";
import { AuthButtons } from "../../AuthButtons";
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
      className={`${styles.header} ${isHomePage ? styles.homePageHeader : ""} 
      `}
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
              <User />
              <BurgerMenu isHomePage={isHomePage} onClick={handleMenuToggle} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
