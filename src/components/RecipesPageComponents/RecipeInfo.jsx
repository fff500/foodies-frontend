import { RecipeMainInfo } from "./RecipeMainInfo";

export const RecipeInfo = ({
  data,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  return (
    <RecipeMainInfo
      data={data}
      isFavorite={isFavorite}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
    />
  );
};
