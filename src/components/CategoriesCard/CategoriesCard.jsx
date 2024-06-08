import React from "react";
import { Button } from "../Button";
import styles from "./CategoriesCard.module.css";

export const CategoriesCard = ({ categoryTitle, categoryImageUrl }) => {
  return (
    <div className={styles.categoriesCard}>
      <img
        className={styles.categoriesCardImage}
        src={categoryImageUrl}
        alt={categoryTitle}
      />
      <h3>{categoryTitle}</h3>
      <Button className={styles.categoriesCardButton} type="button">
        <svg
          className={styles.categoriesCardIcon}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 12.75L12.75 5.25"
            stroke="#050505"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 5.25H12.75V12.75"
            stroke="#050505"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};
