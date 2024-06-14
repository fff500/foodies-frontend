import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import classnames from "classnames";
import { Button } from "../../shared";
import { categoriesData } from "../categoriesData";
import { CategoriesCard } from "../CategoriesCard";
import styles from "./CategoryList.module.css";

export const CategoryList = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(
    window.innerWidth < 767
      ? categoriesData.slice(0, 8)
      : categoriesData.slice(0, 11),
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCategories(
        window.innerWidth < 767
          ? categoriesData.slice(0, 8)
          : categoriesData.slice(0, 11),
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setVisibleCategories(categoriesData);
    } else {
      setVisibleCategories(
        window.innerWidth < 767
          ? categoriesData.slice(0, 8)
          : categoriesData.slice(0, 11),
      );
    }
  };

  const isBigCategory = (index) => {
    const bigCategoryIndices = [2, 3, 7, 9, 11];
    return bigCategoryIndices.includes(index);
  };

  return (
    <div className={styles.categoriesContainer}>
      <ul className={styles.categories}>
        {visibleCategories.map(
          ({ id, title, imageUrl, imageUrl_x2 }, index) => (
            <li
              className={classnames(styles.category, {
                [styles.bigCategory]: isBigCategory(index),
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
          ),
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
  );
};
