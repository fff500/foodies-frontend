import classnames from "classnames";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation";
import profileAvatarPlaceholder from "../../assets/images/profile-avatar-placeholder.png";
import styles from "./Recipes.module.css";
import { PrivateLink } from "../shared";
import { generateImageUrl } from "../../utils";

export const RecipeMainInfo = ({
  data,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
  isLoading,
}) => {
  const imageSrc = generateImageUrl(data?.thumb);
  const userSrc =
    generateImageUrl(data?.owner?.avatar) || profileAvatarPlaceholder;

  return (
    <div className={styles.recipeWrapper}>
      <div className={styles.recipeContainers}>
        <div className={styles.recipeContainer}>
          <img
            src={imageSrc}
            alt={data.title}
            className={styles.imageContainer}
          />
        </div>
        <div
          className={classnames(
            styles.recipeContainer,
            styles.recipeContainerWrapper
          )}
        >
          <div className={styles.recipeMainInfoContainer}>
            <h3 className={styles.recipeTitle}>{data.title}</h3>
            <div className={styles.recipeLabelContainer}>
              <span className={styles.recipeLabel}>{data.category}</span>
              <span className={styles.recipeLabel}>{data.time} min</span>
            </div>
            <p className={styles.recipeText}>{data.description}</p>
            <PrivateLink to={`/user/${data.owner._id}`}>
              <button
                className={classnames(styles.userInfo, styles.resetButton)}
              >
                <div>{<img src={userSrc} alt="owner_img" />}</div>
                <div className={styles.userInfoText}>
                  <span className={styles.userInfoLabelText}>Created by:</span>
                  <span className={styles.userInfoTextName}>
                    {data.owner.name}
                  </span>
                </div>
              </button>
            </PrivateLink>
          </div>
          <div className={styles.recipeMainInfoContainer}>
            <RecipeIngredients ingredients={data.ingredients} />
          </div>
          <div className={styles.recipeMainInfoContainer}>
            <RecipePreparation
              isLoading={isLoading}
              data={data}
              isFavorite={isFavorite}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
