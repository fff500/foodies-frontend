import { Button, Icon, MainTitle, Subtitle } from "../shared";
import { RecipeList } from "./RecipeList";
import RecipeFilters from "./RecipeFilters";
import styles from "./Recipes.module.css";

export const Recipes = () => {
  return (
    <>
      <section className={styles.recipesSection}>
        <div className={styles.recipesNav}>
          <Button className={styles.backButton}>
            <Icon id={"arrowLeft"} className={styles.icon} />
            Back
          </Button>
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
          <Button className={styles.paginationButton}>1</Button>
          <Button className={styles.paginationButton}>2</Button>
          <Button className={styles.paginationButton}>3</Button>
        </nav>
      </section>
    </>
  );
};

export default Recipes;
