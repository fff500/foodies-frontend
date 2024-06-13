import sprite from "../../assets/icons/sprite.svg";
import styles from "./Recipes.module.css";
import { RecipeList } from "./RecipeList";
import RecipeFilters from "./RecipeFilters";
import { MainTitle, Subtitle } from "../shared";

export const Recipes = () => {
  return (
    <>
      <section className={styles.recipesSection}>
        <div className={styles.recipesNav}>
          <button className={styles.backButton}>
            <svg className={styles.logo}>
              <use xlinkHref={`${sprite}#arrowLeft`} />
            </svg>
            Back
          </button>
        </div>
        <div className={styles.titleContainer}>
          <MainTitle>DESSERTS</MainTitle>
          <Subtitle>
            Go on a taste journey, where every sip is a sophisticated creative
            chord, and every dessert is an expression of the most refined
            gastronomic desires.
          </Subtitle>
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
      </section>
    </>
  );
};

export default Recipes;
