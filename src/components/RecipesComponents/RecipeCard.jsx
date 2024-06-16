import { Link } from "react-router-dom";
import { useCallback } from "react";
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

  return (
    <div className={styles.infoCard}>
      <img
        loading="lazy"
        width={100}
        height={100}
        src={imgSrc}
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
                loading="lazy"
                width={32}
                height={32}
                src={avatarSrc}
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
                  width={16}
                  height={16}
                  id="heart"
                  className={isFavorite ? styles.iconActive : styles.icon}
                />
              </PrivateLink>
            </Button>
            <Button>
              <Link to={`/recipe/${recipeId}`}>
                <div className={styles.iconCircle}>
                  <Icon
                    id="arrowUpRight"
                    className={styles.icon}
                    width={16}
                    height={16}
                  />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
