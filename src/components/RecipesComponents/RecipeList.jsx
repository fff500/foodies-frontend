import { DEFAULT_IMAGE_AVATAR_URL } from "../../constants";
import { RecipeCard } from "./RecipeCard";
import styles from "./Recipes.module.css";

export const RecipeList = ({ data }) => {
  return (
    <div className={styles.resipeList}>
      {!data?.recipes.length && (
        <p className={styles.textNotFound}>
          Sorry, but nothing was found for your request 😔
        </p>
      )}

      {data?.recipes.map((card) => (
        <RecipeCard
          key={card._id}
          title={card.title}
          description={card.description}
          imgSrc={card.thumb}
          alt={card.title}
          author={card.owner.name}
          avatarSrc={card.owner.avatar || DEFAULT_IMAGE_AVATAR_URL}
        />
      ))}
    </div>
  );
};
