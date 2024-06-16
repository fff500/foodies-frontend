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
import { useGenerateImageUrl } from "../../../hooks";
import { useEffect, useState } from "react";

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

  const imageSrc = useGenerateImageUrl(user?.avatar);

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
        <img
          loading="lazy"
          width={100}
          height={100}
          src={user.avatar}
          alt={user.name}
          className={styles.image}
        />
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
            <Icon
              className={styles.icon}
              id={"arrowUpRight"}
              width={16}
              height={16}
            />
          </Link>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  );
};
