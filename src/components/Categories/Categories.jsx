import { useSearchParams } from "react-router-dom";
import { MainTitle, Subtitle } from "../shared";
import { Recipes } from "../RecipesComponents";
import styles from "./Categories.module.css";
import { CategoryList } from "./CategoryList";

export const Categories = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

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
