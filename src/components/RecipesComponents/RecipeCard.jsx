import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useGenerateImageUrl } from "../../hooks";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../constants";
import {
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} from "../../redux";
import { Button, Icon, PrivateLink } from "../shared";
import styles from "./Recipes.module.css";

export const RecipeCard = ({
  title,
  description,
  imgSrc,
  alt,
  author,
  avatarSrc,
  isFavorite,
  recipeId,
}) => {
  const [addToFavorites] = useAddToFavoritesMutation();

  const [removeFromFavorites] = useRemoveFromFavoritesMutation();

  const handleFavoriteClick = useCallback(
    () =>
      isFavorite ? removeFromFavorites(recipeId) : addToFavorites(recipeId),
    [isFavorite]
  );

  const cardImageSrc = useGenerateImageUrl(imgSrc) || DEFAULT_IMAGE_AVATAR_URL;
  const userAvatarSrc =
    useGenerateImageUrl(avatarSrc) || DEFAULT_IMAGE_AVATAR_URL;
  return (
    <div className={styles.infoCard}>
      <img
        loading="lazy"
        src={cardImageSrc}
        alt={alt}
        className={styles.infoCardImg}
      />
      <div>
        <h3 className={styles.infoCardTitle}>{title}</h3>
        <p className={styles.infoCardDescription}>{description}</p>
        <div className={styles.infoCardFooter}>
          <PrivateLink to={`/user/${author._id}`}>
            <Button type="button" className={styles.infoCardAuthor}>
              <img
                src={userAvatarSrc}
                alt={author}
                className={styles.authorAvatar}
              />
              <span>{author.name}</span>
            </Button>
          </PrivateLink>

          <div className={styles.infoCardSocial}>
            <Button>
              <PrivateLink
                className={styles.iconCircle}
                onSuccess={handleFavoriteClick}
              >
                <Icon
                  id="heart"
                  className={isFavorite ? styles.iconActive : styles.icon}
                />
              </PrivateLink>
            </Button>
            <Button>
              <Link to={`/recipe/${recipeId}`}>
                <div className={styles.iconCircle}>
                  <Icon id="arrowUpRight" className={styles.icon} />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
