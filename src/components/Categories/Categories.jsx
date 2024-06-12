import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import classnames from "classnames";
import { Button } from "../shared";
import { CategoriesCard } from "./CategoriesCard";
import { categoriesData } from "./categoriesData";
import styles from "./Categories.module.css";
import { generateSequence } from "./generateSequence";

const maxNumber = categoriesData.length;
const sequence = generateSequence(maxNumber);

export const Categories = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(
    window.innerWidth < 767
      ? categoriesData.slice(0, 8)
      : categoriesData.slice(0, 11)
  );
  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setVisibleCategories(categoriesData);
    } else {
      setVisibleCategories(
        window.innerWidth < 767
          ? categoriesData.slice(0, 8)
          : categoriesData.slice(0, 11)
      );
    }
  };

  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.title}>Categories</h2>
      <p className={styles.subtitle}>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </p>
      <div className={styles.categoriesContainer}>
        <ul className={styles.categories}>
          {visibleCategories.map(
            ({ id, title, imageUrl, imageUrl_x2 }, index) => (
              <li
                className={classnames(styles.category, {
                  [styles.bigCategory]: sequence.includes(index + 1),
                })}
                key={nanoid()}
              >
                <CategoriesCard
                  categoryTitle={title}
                  categoryImageUrl={imageUrl}
                  categoryImageUrl_x2={imageUrl_x2}
                  id={id}
                />
              </li>
            )
          )}
          <li>
            <Button
              className={styles.allCategoriesButton}
              type="button"
              onClick={handleShowAll}
            >
              {showAll ? "Show less" : "All categories"}
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
};
