import classnames from "classnames";
import { useGetCurrentUserQuery } from "../../../redux";
import { Logo } from "../../shared";
import { Container } from "../Container";
import { Nav } from "./Nav";
import { BurgerMenu } from "./BurgerMenu";
import { AuthBar } from "./AuthBar";
import { UserBar } from "./UserBar";
import styles from "./Header.module.css";

export const Header = ({ isHomePage }) => {
  const { isLoading, data } = useGetCurrentUserQuery();

  const content = !data ? (
    <div className={styles.authButtonsWrapper}>
      <AuthBar />
    </div>
  ) : (
    <>
      <Nav isHomePage={isHomePage} />
      <UserBar userName={data?.name || ""} id={data?._id} />
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

          {isLoading ? null : content}
        </div>
      </Container>
    </header>
  );
};
