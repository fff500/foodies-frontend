import classnames from "classnames";
import { useIsAuth } from "../../../hooks";
import { LoadingSpinner, Logo } from "../../shared";
import { Container } from "../Container";
import { Nav } from "./Nav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthBar } from "./AuthBar";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";
import { useGetCurrentUserQuery } from "../../../redux";

export const Header = ({ isHomePage }) => {
  const { isAuth, isLoading, data } = useIsAuth();
  const { data: userData } = useGetCurrentUserQuery();

  const content = !isAuth ? (
    <div className={styles.authButtonsWrapper}>
      <AuthBar />
    </div>
  ) : (
    <>
      <Nav isHomePage={isHomePage} />
      <UserBar
        userName={data?.name || ""}
        userImage={userData?.avatar}
        id={data?._id}
      />
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
