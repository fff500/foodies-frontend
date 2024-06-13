import styles from "./Recipes.module.css";
import { RecipeCard } from "../RecipesComponents";

export const PopularRecipes = ({ data }) => {
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
                author={card.owner.name}
                avatarSrc={card.owner.avatar}
                // className={styles.cardStyle}
              />
            ),
        )}
      </div>
    </div>
  );
};
