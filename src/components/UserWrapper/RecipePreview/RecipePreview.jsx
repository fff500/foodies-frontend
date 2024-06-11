import React from "react";
import styles from "./RecipePreview.module.css";
import { Button } from "../../shared";
import sprite from "../../../assets/icons/sprite.svg";

export const RecipePreview = ({ recipe }) => {
  return (
    <div className={styles.recipePreview}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{recipe.title.toUpperCase()}</h3>
        <p className={styles.description}>{recipe.description}</p>
      </div>
      <div className={styles.actions}>
        <a href={`/recipe/${recipe._id}`} className={styles.link}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#arrowUpRight`} />
          </svg>
        </a>
        <Button className={styles.deleteButton} type="button">
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#trash`} />
          </svg>
        </Button>
      </div>
    </div>
  );
};
