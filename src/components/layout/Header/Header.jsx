import classnames from "classnames";
import { Logo } from "../../shared";
import { Container } from "../Container";
import { HeaderNav } from "./HeaderNav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButtons } from "./AuthButtons";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";
import { useIsAuth } from "../../../hooks/useIsAuth";

export const Header = ({ isHomePage }) => {
  const { isAuth } = useIsAuth();

  return (
    <header
      className={classnames(styles.header, {
        [styles.homePageHeader]: isHomePage,
      })}
    >
      <Container>
        <div className={styles.headerContentWrapper}>
            <Logo className={styles.logo} />
          {!isAuth ? (
            <div className={styles.authButtonsWrapper}>
              <AuthButtons />
            </div>
          ) : (
            <>
              <HeaderNav />
              <UserBar userName="User" />
              <BurgerMenu isHomePage={isHomePage} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};
