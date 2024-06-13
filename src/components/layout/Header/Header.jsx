import { useState } from "react";
import classnames from "classnames";
import { Logo } from "../../shared";
import { Container } from "../Container";
import { Nav } from "./Nav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthBar } from "./AuthBar";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";

export const Header = ({ isHomePage }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header
      className={classnames(styles.header, {
        [styles.homePageHeader]: isHomePage,
      })}
    >
      <Container>
        <div className={styles.headerContentWrapper}>
          <Logo className={styles.logo} />
          {!isLoggedIn ? (
            <div className={styles.authButtonsWrapper}>
              <AuthBar onSignIn={handleSignIn} />
            </div>
          ) : (
            <>
              <Nav />
              <UserBar userName="User" onLogout={handleLogout} />
              <BurgerMenu isHomePage={isHomePage} onClick={handleMenuToggle} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
