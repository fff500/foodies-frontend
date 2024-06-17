import { Link } from "react-router-dom";
import { Button, Icon } from "../../shared";
import styles from "./UserCard.module.css";
import {
  useFollowUserMutation,
  useGetCurrentUserQuery,
  useGetRecipesByOwnerIdQuery,
  useUnfollowUserMutation,
} from "../../../redux";
import { UserRecipeImage } from "./UserRecipeImage";
import { generateImageUrl } from "../../../utils";
import { useEffect, useState } from "react";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../../constants";

export const UserCard = ({ type, user }) => {
  const [unfollowUser] = useUnfollowUserMutation();
  const [followUser] = useFollowUserMutation();

  const handleUnfollow = async () => {
    await unfollowUser(user._id);
  };

  const handleFollow = () => {
    followUser(user._id);
  };

  const { data: userRecipes = {} } = useGetRecipesByOwnerIdQuery({
    id: user._id,
  });

  const imageSrc = generateImageUrl(user?.avatar) || DEFAULT_IMAGE_AVATAR_URL;

  const { data: currentUser } = useGetCurrentUserQuery();

  const [isFollowing, setIsFollowing] = useState(
    currentUser ? currentUser.following.includes(user._id) : false
  );

  useEffect(() => {
    setIsFollowing(
      currentUser ? currentUser.following.includes(user._id) : false
    );
  }, [currentUser, user]);

  return (
    <>
      <div className={styles.userCard}>
        <img src={imageSrc} alt={user.name} className={styles.image} />
        <div>
          <h3 className={styles.title}>{user.name.toUpperCase()}</h3>
          <p className={styles.description}>
            Own recipes: {user.createdRecipesCount}
          </p>
          <Button
            onClick={isFollowing ? handleUnfollow : handleFollow}
            className={styles.cta}
            type="button"
          >
            {isFollowing ? "UNFOLLOW" : "FOLLOW"}
          </Button>
        </div>
        <div className={styles.recipeImages}>
          {userRecipes.recipes?.slice(0, 3).map((recipe) => (
            <UserRecipeImage key={recipe._id} recipe={recipe} />
          ))}
        </div>
        <div className={styles.actions}>
          <Link to={`/user/${user._id}`} className={styles.link}>
            <Icon className={styles.icon} id={"arrowUpRight"} />
          </Link>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};
