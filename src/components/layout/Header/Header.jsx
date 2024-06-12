import { useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Logo } from "../../shared";
import { Container } from "../Container";
import { HeaderNav } from "./HeaderNav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButtons } from "./AuthButtons";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";
import { BurgerModal, LogOutModal } from "../../Modals";

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
          <Link to="/">
            <Logo />
          </Link>
          {!isLoggedIn ? (
            <div className={styles.authButtonsWrapper}>
              <AuthButtons onSignIn={handleSignIn} />
            </div>
          ) : (
            <>
              <HeaderNav />
              <UserBar userName="User" onLogout={handleLogout} />
              <BurgerMenu isHomePage={isHomePage} onClick={handleMenuToggle} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
