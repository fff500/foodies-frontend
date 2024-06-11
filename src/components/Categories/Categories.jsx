import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import classnames from "classnames";
import { Button } from "../shared";
import { CategoriesCard } from "./CategoriesCard";
import { categoriesData } from "./categoriesData";
import styles from "./Categories.module.css";

export const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  // Define grid areas dynamically
  const areas = [];
  categoriesData.forEach((_, index) => {
    areas.push(`card${index}`);
  });

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
          {categoriesData.map(({ id, title, imageUrl, imageUrl_x2 }, index) => (
            <li
              className={classnames(styles.categoriesGridItem, {
                [styles.hidden]: !showAll && index >= 8,
              })}
              style={{ gridArea: areas[index] }}
              key={nanoid()}
            >
              <CategoriesCard
                categoryTitle={title}
                categoryImageUrl={imageUrl}
                categoryImageUrl_x2={imageUrl_x2}
                id={id}
              />
            </li>
          ))}
        </ul>
        <Button className={styles.allCategoriesButton} type="button" onClick={handleShowAll}>
          {showAll ? "Show less" : "All categories"}
        </Button>
      </div>
    </section>
  );
};
