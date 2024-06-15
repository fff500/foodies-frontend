import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { MainTitle, Subtitle } from "../shared";
import styles from "./Categories.module.css";
import { CategoryList } from "./CategoryList";
import { Recipes } from "../RecipesComponents";

export const Categories = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const [, scrollTo] = useWindowScroll();
  const tablet = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    if (selectedCategory) {
      scrollTo({ y: tablet ? 980 : 840 });
    }
  }, [selectedCategory]);

  if (selectedCategory) {
    return <Recipes category={selectedCategory} />;
  }
  return (
    <section className={styles.categoriesSection}>
      <MainTitle>Categories</MainTitle>
      <Subtitle>
        Discover a limitless world of culinary possibilities and enjoy exquisite
        recipes that combine taste, style and the warm atmosphere of the
        kitchen.
      </Subtitle>
      <CategoryList />
    </section>
  );
};
