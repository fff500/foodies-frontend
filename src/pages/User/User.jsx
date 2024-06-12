import { Breadcrumbs, Container } from "../../components";
import { UserWrapper } from "../../components/UserWrapper";
import styles from "./User.module.css";
import { MainTitle, Subtitle } from "../../components";

const User = () => {
  return (
    <>
      <Breadcrumbs />
      <Container>
        <section className={styles.userSection}>
          <MainTitle className={styles.pageTitle}>Profile</MainTitle>
          <Subtitle className={styles.pageDescription}>
            Reveal your culinary art, share your favorite recipe and create
            gastronomic masterpieces with us.
          </Subtitle>
          <UserWrapper />
        </section>
      </Container>
    </>
  );
};

export default User;
