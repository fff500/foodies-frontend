import { MainTitle, Subtitle } from "../shared";
import styles from "./Categories.module.css";
import { CategoryList } from "./CategoryList";

export const Categories = () => {
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
