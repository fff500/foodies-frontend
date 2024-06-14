import classnames from "classnames";
import { LoadingSpinner, Logo } from "../../shared";
import { Container } from "../Container";
import { HeaderNav } from "./HeaderNav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthButtons } from "./AuthButtons";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";
import { useIsAuth } from "../../../hooks/useIsAuth";

export const Header = ({ isHomePage }) => {
  const { isAuth, isLoading } = useIsAuth();

  const content = !isAuth ? (
    <div className={styles.authButtonsWrapper}>
      <AuthButtons />
    </div>
  ) : (
    <>
      <HeaderNav />
      <UserBar userName="User" />
      <BurgerMenu isHomePage={isHomePage} />
    </>
  );
  return (
    <header
      className={classnames(styles.header, {
        [styles.homePageHeader]: isHomePage,
      })}
    >
      <Container>
        <div className={styles.headerContentWrapper}>
          <Logo
            className={classnames(styles.logo, {
              [styles.isLoadingLogo]: isLoading,
            })}
          />
          {isLoading ? (
            <LoadingSpinner
              containerClassName={styles.loadingContainer}
              className={styles.loading}
            />
          ) : (
            content
          )}
        </div>
      </Container>
    </header>
  );
};
