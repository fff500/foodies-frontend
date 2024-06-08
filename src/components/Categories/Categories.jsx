import React from "react";
import { Button } from "../Button";
import { CategoriesCard } from "../CategoriesCard";
import { categoriesData } from "./categoriesData";
import styles from "./Categories.module.css";
import { nanoid } from "@reduxjs/toolkit";

export const Categories = () => {
  return (
    <section>
      <h2 className={styles.title}>Categories</h2>
      <p className={styles.subtitle}>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </p>
      <div className={styles.categoriesGridWrapper}>
        <ul className={styles.categoriesGrid}>
          {categoriesData.map((category) => (
            <li key={nanoid()} className={styles.categoriesGridItem}>
              <CategoriesCard
                categoryTitle={category.title}
                categoryImageUrl={category.imageUrl}
              />
            </li>
          ))}
        </ul>
        <Button className={styles.allCategoriesButton} type="button">
          All categories
        </Button>
      </div>
    </section>
  );
};
