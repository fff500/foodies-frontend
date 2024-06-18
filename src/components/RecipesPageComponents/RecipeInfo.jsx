import { RecipeMainInfo } from "./RecipeMainInfo";

export const RecipeInfo = ({
  data,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
  isLoading,
}) => {
  return (
    <RecipeMainInfo
      data={data}
      isFavorite={isFavorite}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
      isLoading={isLoading}
    />
  );
};
