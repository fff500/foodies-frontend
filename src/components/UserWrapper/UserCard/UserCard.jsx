import { Link } from "react-router-dom";
import { Button, Icon } from "../../shared";
import styles from "./UserCard.module.css";

export const UserCard = ({ type, user }) => {
  return (
    <div className={styles.userCard}>
      <img src={user.avatar} alt={user.name} className={styles.image} />
      <div>
        <h3 className={styles.title}>{user.name.toUpperCase()}</h3>
        <p className={styles.description}>
          Own recipes: {user.createdRecipesCount}
        </p>
        {type === "following" && (
          <Button className={styles.cta} type="button">
            FOLLOWING
          </Button>
        )}
        {type === "followers" && (
          <Button className={styles.cta} type="button">
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
