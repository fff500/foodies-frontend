import styles from "./IngredientsList.module.css";

export const IngredientsList = ({ ingredients }) => {
  return (
    <ul className={styles.ingredientsItems}>
      {ingredients?.map((elem) => (
        <li className={styles.ingredient} key={elem._id}>
          <div className={styles.ingredientImg}>
            <img src={elem.img} alt={elem.name} />
          </div>
          <div className={styles.ingredientTextItems}>
            <span>{elem.name}</span>
            <span className={styles.ingredientText}>{elem.measure}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
