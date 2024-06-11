import { Container } from "../../components/layout";

import { AddRecipeForm } from "../../components";

import styles from "./AddRecipe.module.css";

const AddRecipe = () => {
  return (
    <>
      <Container>
        <div className={styles.pageTitleContainer}>
          <h1>AddRecipe</h1>
        </div>
        <div className={styles.pageDescriptionContainer}>
          <p>
            Reveal your culinary art, share your favorite recipe and create
            gastronomic masterpieces with us.
          </p>
        </div>
        <AddRecipeForm />
      </Container>
    </>
  );
};

export default AddRecipe;
