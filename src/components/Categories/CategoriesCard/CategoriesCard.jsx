import { Link } from "react-router-dom";
import { Icon } from "../../shared";
import styles from "./CategoriesCard.module.css";

export const CategoriesCard = ({
  categoryTitle,
  categoryImageUrl,
  categoryImageUrl_x2,
}) => {
  const cardStyle = {
    background: `linear-gradient(0deg, rgba(5, 5, 5, 0.18) 0%, rgba(5, 5, 5, 0.18) 100%), url(${categoryImageUrl}) lightgray 50% / cover no-repeat`,
    backgroundImage: `url(${categoryImageUrl}), url(${categoryImageUrl_x2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const mediaQuery = `@media screen and (min-resolution: 192dpi), 
                          screen and (min-resolution: 2dppx), 
                          screen and (-webkit-min-device-pixel-ratio: 2), 
                          screen and (min-device-pixel-ratio: 2)`;

  cardStyle.backgroundImage += `, url(${categoryImageUrl_x2})`;

  return (
    <div className={styles.categoriesCard} style={cardStyle}>
      <div className={styles.categoriesCardContent}>
        <h3 className={styles.categoriesCardTitle}>{categoryTitle}</h3>
        <Link
          to={`/recipesInfo/${categoryTitle}`}
          className={styles.categoriesCardButton}
          type="button"
        >
          <Icon
            id="arrowUpRight"
            className={styles.categoriesCardIcon}
            width={16}
            height={16}
          />
        </Link>
      </div>
    </div>
  );
};
