import { useMemo } from "react";
import styles from "./Recipes.module.css";
import { RecipeCard } from "../RecipesComponents";

export const PopularRecipes = ({ data, user }) => {
  const favorites = useMemo(
    () =>
      [...(user?.favorites || [])].reduce((acc, el) => {
        acc[el] = true;
        return acc;
      }, {}),
    [user]
  );
  return (
    <div>
      <h3 className={styles.recipeTitle}>Popular recipes</h3>
      <div className={styles.cardsList}>
        {data.map(
          (card, index) =>
            index <= 3 && (
              <RecipeCard
                key={index}
                title={card.title}
                description={card.description}
                imgSrc={card.thumb}
                author={card.owner}
                isFavorite={!!favorites[card?._id]}
                recipeId={card._id}
                avatarSrc={card.owner.avatar}
              />
            )
        )}
      </div>
    </div>
  );
};
