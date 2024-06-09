import classNames from "classnames";
import { RecipeIngredients } from "./RecipeIngredients";
import { RecipePreparation } from "./RecipePreparation";
import { PopularRecipes } from "./PopularRecipes";
import styles from "./Recipes.module.css";

export const RecipeMainInfo = ({ data }) => {
  return (
    <div className={classNames(styles.recipeWrapper)}>
      <div className={classNames(styles.recipeContainers)}>
        <div className={classNames(styles.recipeContainer)}>
          <img
            src={data.thumb}
            alt={data.title}
            className={classNames(styles.imageContainer)}
          />
        </div>
        <div
          className={classNames(
            styles.recipeContainer,
            styles.recipeContainerWrapper,
          )}
        >
          <div className={classNames(styles.recipeMainInfoContainer)}>
            <h3 className={classNames(styles.recipeTitle)}>{data.title}</h3>
            <div className={classNames(styles.recipeLabelContainer)}>
              <span className={classNames(styles.recipeLabel)}>
                {data.category}
              </span>
              <span className={classNames(styles.recipeLabel)}>
                {data.time} min
              </span>
            </div>
            <p className={classNames(styles.recipeText)}>{data.description}</p>
            <button className={classNames(styles.userInfo, styles.resetButton)}>
              <div>
                <img src={data.owner.avatar} alt="owner_img" />
              </div>
              <div className={classNames(styles.userInfoText)}>
                <span className={classNames(styles.userInfoLabelText)}>
                  Created by:
                </span>
                <span className={classNames(styles.userInfoTextName)}>
                  {data.owner.name}
                </span>
              </div>
            </button>
          </div>

          <div className={classNames(styles.recipeMainInfoContainer)}>
            <RecipeIngredients ingredients={data.ingredients} />
          </div>

          <div className={classNames(styles.recipeMainInfoContainer)}>
            <RecipePreparation instructions={data.instructions} />
          </div>
        </div>
      </div>
      <PopularRecipes />
    </div>
  );
};
