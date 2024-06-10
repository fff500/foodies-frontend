import classnames from "classnames";
import styles from "./Recipes.module.css";

export const RecipeIngredients = ({ ingredients }) => {
  return (
    <>
      <h3 className={styles.recipeTitle}>Ingredients</h3>
      <ul className={styles.ingredientsItems}>
        {ingredients?.map((elem) => (
          <li className={styles.ingredient} key={elem.id}>
            <div className={styles.ingredientImg}>
              <img src={elem.img} alt={elem.name} />
            </div>
            <div
              className={classnames(
                styles.recipeText,
                styles.ingredientTextItems,
              )}
            >
              <span>{elem.name}</span>
              <span className={styles.ingredientTextColor}>{elem.measure}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
