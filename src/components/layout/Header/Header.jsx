import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderNav } from "../../HeaderNav";
import User from "../../../pages/User";
import { Logo } from "../../Logo";
import { Container } from "../Container";
import { BurgerMenu } from "../../BurgerMenu";
import { AuthButtons } from "../../AuthButtons";
import styles from "./Header.module.css";
// import { Button } from "../../Button";

export const Header = () => {
  const [isLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${location.pathname === "/" ? styles.homePageHeader : ""}`}
    >
      <Container>
        <div className={styles.headerContentWrapper}>
          <Link to="/">
            <Logo />
          </Link>
          {isLoggedIn ? (
            <AuthButtons />
          ) : (
            <>
              <HeaderNav />
              <User userImage={"data.serImage"} userName={"data.userName"} />
              <BurgerMenu onClick={handleMenuToggle} />
            </>
          )}
        </div>
      </Container>
      {/* {isMenuOpen && (
        <div className={styles.modal}>
          <HeaderNav />
          <User userImage={"data.serImage"} userName={"data.userName"} />
          <Button
            onClick={handleMenuToggle}
            className={styles.closeButton}
            type="button"
          >
            Close
          </Button>
        </div>
      )} */}
    </header>
  );
};
