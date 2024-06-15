import { useSearchParams } from "react-router-dom";
import { Button, Icon } from "../../shared";
import { CategoryImageContainer } from "../CategoryImageContainer";
import styles from "./CategoriesCard.module.css";

export const CategoriesCard = ({
  categoryTitle,
  categoryImageUrl,
  categoryImageUrl_x2,
  id,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryClick = () => {
    searchParams.set("category", id);
    setSearchParams(searchParams);
  };

  return (
    <CategoryImageContainer
      categoryImageUrl={categoryImageUrl}
      categoryImageUrl_x2={categoryImageUrl_x2}
    >
      <div className={styles.categoriesCardContent}>
        <h3 className={styles.categoriesCardTitle}>{categoryTitle}</h3>
        <Button
          type="button"
          className={styles.categoriesCardButton}
          onClick={handleCategoryClick}
        >
          <Icon
            id="arrowUpRight"
            className={styles.categoriesCardIcon}
            width={16}
            height={16}
          />
        </Button>
      </div>
    </CategoryImageContainer>
  );
};