import { Link } from "react-router-dom";
import { Button, Icon } from "../../shared";
import styles from "./UserCard.module.css";
import {
  useFollowUserMutation,
  useGetRecipesByOwnerIdQuery,
  useUnfollowUserMutation,
} from "../../../redux";

export const UserCard = ({ type, user }) => {
  const [unfollowUser] = useUnfollowUserMutation();
  const [followUser] = useFollowUserMutation();

  const handleUnfollow = async () => {
    await unfollowUser(user._id);
  };

  const handleFollow = () => {
    followUser(user._id);
  };

  const { data: userRecipes = {} } = useGetRecipesByOwnerIdQuery(user._id);

  return (
    <>
      <div className={styles.userCard}>
        <img src={user.avatar} alt={user.name} className={styles.image} />
        <div>
          <h3 className={styles.title}>{user.name.toUpperCase()}</h3>
          <p className={styles.description}>
            Own recipes: {user.createdRecipesCount}
          </p>
          {type === "following" && (
            <Button
              onClick={handleUnfollow}
              className={styles.cta}
              type="button"
            >
              FOLLOWING
            </Button>
          )}
          {type === "followers" && (
            <Button onClick={handleFollow} className={styles.cta} type="button">
              FOLLOW
            </Button>
          )}
        </div>
        <div className={styles.recipeImages}>
          {userRecipes.recipes?.slice(0, 3).map((recipe) => (
            <img
              key={recipe._id}
              src={recipe.image}
              alt={recipe.title}
              className={styles.recipeImage}
            />
          ))}
        </div>
        <div className={styles.actions}>
          <Link to={`/recipe/${user._id}`} className={styles.link}>
            <Icon className={styles.icon} id={"arrowUpRight"} />
          </Link>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};
