import { useGenerateImageUrl } from "../../../../hooks";

export const UserRecipeImage = ({ recipe }) => {
  const imageSrc = useGenerateImageUrl(recipe?.image);

  return <img loading="lazy" width={100} height={100}  key={recipe?._id} src={imageSrc} alt={recipe?.title} />;
};
