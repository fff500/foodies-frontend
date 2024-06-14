import { UserWrapper } from "../../components/UserWrapper";
import { Breadcrumbs, Container } from "../../components";
import { MainTitle, Subtitle } from "../../components";
import { UserWrapperLoggedIn } from "../../components/UserWrapper";
import { useParams } from "react-router-dom";
import styles from "./User.module.css";

const User = () => {
  const { userId } = useParams("userId");

  return (
    <section className={styles.userSection}>
      <Breadcrumbs />
      <Breadcrumbs />
      <Container>
        <MainTitle className={styles.pageTitle}>Profile</MainTitle>
        <Subtitle className={styles.pageDescription}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </Subtitle>
        {userId ? <UserWrapper userId={userId} /> : <UserWrapperLoggedIn />}
      </Container>
    </section>
  );
};

export default User;
