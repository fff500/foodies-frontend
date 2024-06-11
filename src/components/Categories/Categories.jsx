import { nanoid } from "@reduxjs/toolkit";
import { Button } from "../shared";
import { CategoriesCard } from "./CategoriesCard";
import { categoriesData } from "./categoriesData";
import styles from "./Categories.module.css";

export const Categories = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.title}>Categories</h2>
      <p className={styles.subtitle}>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </p>
      <div className={styles.categoriesGridWrapper}>
        <ul className={styles.categoriesGrid}>
          {categoriesData.map(({ id, title, imageUrl, imageUrl_x2 }) => (
            <li className={styles.categoriesGridItem} key={nanoid()}>
              <CategoriesCard
                categoryTitle={title}
                categoryImageUrl={imageUrl}
                categoryImageUrl_x2={imageUrl_x2}
                id={id}
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
