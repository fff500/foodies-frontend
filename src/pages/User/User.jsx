import { UserWrapper } from "../../components/UserWrapper";
import { Container } from "../../components";
import { MainTitle, Subtitle } from "../../components";
import { UserWrapperLoggedIn } from "../../components/UserWrapper";
import { useParams } from "react-router-dom";
import styles from "./User.module.css";
import { useGetCurrentUserQuery } from "../../redux";

const User = () => {
  const { userId } = useParams("userId");

  const { data: currentUser } = useGetCurrentUserQuery();

  const isCurrentUser = currentUser && currentUser._id === userId;

  return (
    <section className={styles.userSection}>
      <Container>
        <MainTitle className={styles.pageTitle}>Profile</MainTitle>
        <Subtitle className={styles.pageDescription}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </Subtitle>
        {!isCurrentUser ? (
          <UserWrapper userId={userId} />
        ) : (
          <UserWrapperLoggedIn />
        )}
      </Container>
    </section>
  );
};

export default User;
