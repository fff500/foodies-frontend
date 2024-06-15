import { UserWrapper } from "../../components/UserWrapper";
import { Container, ErrorComponent, LoadingSpinner } from "../../components";
import { MainTitle, Subtitle } from "../../components";
import { UserWrapperLoggedIn } from "../../components/UserWrapper";
import { useParams } from "react-router-dom";
import styles from "./User.module.css";
import { useGetCurrentUserQuery } from "../../redux";

const User = () => {
  const { userId } = useParams("userId");

  const {
    data: userCurrent,
    error: userCurrentError,
    isLoading: userCurrentLoading,
    isFetching: userCurrentFetching,
  } = useGetCurrentUserQuery();

  const isCurrentUser = userCurrent && userCurrent._id === userId;

  return (
    <section className={styles.userSection}>
      <Container>
        <MainTitle className={styles.pageTitle}>Profile</MainTitle>
        <Subtitle className={styles.pageDescription}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </Subtitle>
        {userCurrentLoading && (
          <div className={styles.loadingStyles}>
            <LoadingSpinner />
          </div>
        )}
        {!userCurrentLoading && userCurrentError && (
          <ErrorComponent onRetry={userCurrentFetching} />
        )}
        {!userCurrentLoading &&
          !userCurrentError &&
          (!isCurrentUser ? (
            <UserWrapper userId={userId} />
          ) : (
            <UserWrapperLoggedIn />
          ))}
      </Container>
    </section>
  );
};

export default User;
