import { useGenerateImageUrl } from "../../../../hooks";

export const UserRecipeImage = ({ recipe }) => {
  const imageSrc = useGenerateImageUrl(recipe?.image);

  return <img key={recipe?._id} src={imageSrc} alt={recipe?.title} />;
};
