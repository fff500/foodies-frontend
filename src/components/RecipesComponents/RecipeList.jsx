import { useMemo } from "react";
import { DEFAULT_IMAGE_AVATAR_URL } from "../../constants";
import { useGetCurrentUserQuery } from "../../redux";
import { RecipeCard } from "./RecipeCard";
import styles from "./Recipes.module.css";

export const RecipeList = ({ data }) => {
  const { data: userCurrent } = useGetCurrentUserQuery();

  const favorites = useMemo(
    () =>
      [...(userCurrent?.favorites || [])].reduce((acc, el) => {
        acc[el] = true;
        return acc;
      }, {}),
    [userCurrent]
  );

  return (
    <div className={styles.resipeList}>
      {!data?.recipes.length && (
        <p className={styles.textNotFound}>
          Sorry, but nothing was found for your request 😔
        </p>
      )}

      {data?.recipes.map((card) => (
        <RecipeCard
          key={card._id}
          title={card.title}
          description={card.description}
          imgSrc={card.thumb}
          alt={card.title}
          isFavorite={!!favorites[card._id]}
          recipeId={card._id}
          author={card.owner}
          avatarSrc={card.owner.avatar || DEFAULT_IMAGE_AVATAR_URL}
        />
      ))}
    </div>
  );
};
