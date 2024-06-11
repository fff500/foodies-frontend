import { useGetRecipeQuery } from "../../redux";
import { ErrorComponent } from "../shared/ErrorComponent";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeList.module.css";

const RecipeList = () => {
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeLoading,
    isFetching: recipeFetching,
    refetch: refetchRecipe,
  } = useGetRecipeQuery();

  const isLoading = recipeLoading || recipeFetching;

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className={styles.loadingStyles}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && recipeError && <ErrorComponent onRetry={refetchRecipe} />}

      {recipeData &&
        recipeData.map((card, index) => (
          <RecipeCard
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
            alt={card.alt}
            author={card.author}
            avatarSrc={card.avatarSrc}
          />
        ))}
    </div>
  );
};

export default RecipeList;
