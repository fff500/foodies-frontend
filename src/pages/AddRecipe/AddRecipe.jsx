import { Container } from "../../components/layout";

import { AddRecipeForm } from "./components/AddRecipeForm";

const AddRecipe = () => {
  return (
    <>
      <Container>
        <h1>AddRecipe</h1>
        <p>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </p>
        <AddRecipeForm />
      </Container>
    </>
  );
};

export default AddRecipe;
