import sprite from "../../assets/icons/sprite.svg";
import styles from "./Recipes.module.css";
import { RecipeList } from "./RecipeList";
import RecipeFilters from "./RecipeFilters";

export const Recipes = () => {
  return (
    <>
      <div className={styles.recipesNav}>
        <button className={styles.backButton}>
          <svg className={styles.logo}>
            <use xlinkHref={`${sprite}#arrowLeft`} />
          </svg>
          Back
        </button>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>DESSERTS</h2>
        <p className={styles.description}>
          Go on a taste journey, where every sip is a sophisticated creative
          chord, and every dessert is an expression of the most refined
          gastronomic desires.
        </p>
      </div>
      <div className={styles.mainResipesContainer}>
        <RecipeFilters />
        <RecipeList />
      </div>
      <nav className={styles.pagination}>
        <button className={styles.paginationButton}>1</button>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
      </nav>
    </>
  );
};

export default Recipes;
