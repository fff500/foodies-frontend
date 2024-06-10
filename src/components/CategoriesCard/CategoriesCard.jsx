import React from "react";
import styles from "./CategoriesCard.module.css";
import { Button } from "../Button";
import sprite from "../../assets/icons/sprite.svg";

export const CategoriesCard = ({
  categoryTitle,
  categoryImageUrl,
  categoryImageUrl_x2,
  id,
}) => {
  const cardStyle = {
    background: `linear-gradient(0deg, rgba(5, 5, 5, 0.18) 0%, rgba(5, 5, 5, 0.18) 100%), url(${categoryImageUrl}) lightgray 50% / cover no-repeat`,
  };

  return (
    <div className={styles.categoriesCard} style={cardStyle}>
      <div className={styles.categoriesCardContent}>
        <h3 className={styles.categoriesCardTitle}>{categoryTitle}</h3>
        <Button className={styles.categoriesCardButton} type="button">
          <svg
            width="16"
            height="16"
            className={styles.categoriesCardIconButton}
          >
            <use xlinkHref={`${sprite}#arrowUpRight`} />
          </svg>
        </Button>
      </div>
    </div>
  );
};
