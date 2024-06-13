import classnames from "classnames";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation";
import profileAvatarPlaceholder from "../../assets/images/profileAvatarPlaceholder.png";
import styles from "./Recipes.module.css";

export const RecipeMainInfo = ({ data }) => {
  return (
    <div className={styles.recipeWrapper}>
      <div className={styles.recipeContainers}>
        <div className={styles.recipeContainer}>
          <img
            src={data?.thumb}
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
            <button className={classnames(styles.userInfo, styles.resetButton)}>
              <div>
                {
                  <img
                    src={
                      data.owner.avatar
                        ? data.owner.avatar
                        : profileAvatarPlaceholder
                    }
                    alt="owner_img"
                  />
                }
              </div>
              <div className={styles.userInfoText}>
                <span className={styles.userInfoLabelText}>Created by:</span>
                <span className={styles.userInfoTextName}>
                  {data.owner.name}
                </span>
              </div>
            </button>
          </div>
          <div className={styles.recipeMainInfoContainer}>
            <RecipeIngredients ingredients={data.ingredients} />
          </div>
          <div className={styles.recipeMainInfoContainer}>
            <RecipePreparation instructions={data.instructions} />
          </div>
        </div>
      </div>
    </div>
  );
};
