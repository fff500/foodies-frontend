import { Link } from "react-router-dom";
import { Button, Icon } from "../../shared";
import styles from "./UserCard.module.css";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../../redux";

export const UserCard = ({ type, user }) => {
  const [unfollowUser] = useUnfollowUserMutation();
  const [followUser] = useFollowUserMutation();

  const handleUnfollow = async () => {
    await unfollowUser(user._id);
  };

  const handleFollow = () => {
    followUser(user._id);
  };

  return (
    <div className={styles.userCard}>
      <img src={user.avatar} alt={user.name} className={styles.image} />
      <div>
        <h3 className={styles.title}>{user.name.toUpperCase()}</h3>
        <p className={styles.description}>
          Own recipes: {user.createdRecipesCount}
        </p>
        {type === "following" && (
          <Button onClick={handleUnfollow} className={styles.cta} type="button">
            FOLLOWING
          </Button>
        )}
        {type === "followers" && (
          <Button onClick={handleFollow} className={styles.cta} type="button">
            FOLLOW
          </Button>
        )}
      </div>
      <div className={styles.actions}>
        <Link to={`/recipe/${user._id}`} className={styles.link}>
          <Icon id={"arrowUpRight"} width={16} height={16} />
        </Link>
      </div>
    </div>
  );
};
