import classNames from "classnames";
import styles from "./Recipes.module.css";

export const RecipeIngredients = ({ ingredients }) => {
  return (
    <>
      <h3 className={classNames(styles.recipeTitle)}>Ingredients</h3>
      <ul className={classNames(styles.ingredientsItems)}>
        {ingredients?.map((elem) => (
          <li className={classNames(styles.ingredient)}>
            <div className={classNames(styles.ingredientImg)}>
              <img src={elem.img} alt={elem.name} />
            </div>
            <div
              className={classNames(
                styles.recipeText,
                styles.ingredientTextItems,
              )}
            >
              <span>{elem.name}</span>
              <span className={classNames(styles.ingredientTextColor)}>
                {elem.measure}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
