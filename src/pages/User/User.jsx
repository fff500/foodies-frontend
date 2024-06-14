import { UserWrapper } from "../../components/UserWrapper";
import { Breadcrumbs, Container } from "../../components";
import { MainTitle, Subtitle } from "../../components";
import styles from "./User.module.css";

const User = () => {
  return (
    <section className={styles.userSection}>
      <Breadcrumbs />
      <Container>
        <MainTitle className={styles.pageTitle}>Profile</MainTitle>
        <Subtitle className={styles.pageDescription}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </Subtitle>
        <UserWrapper />
      </Container>
    </section>
  );
};

export default User;
