import sprite from "../../assets/icons/sprite.svg";
import styles from "./Recipes.module.css";

export const RecipeCard = ({
  title,
  description,
  imgSrc,
  alt,
  author,
  avatarSrc,
}) => {
  return (
    <div className={styles.infoCard}>
      <img
        loading="lazy"
        src={imgSrc}
        alt={alt}
        className={styles.infoCardImg}
      />
      <div className={styles.infoCardContent}>
        <h3 className={styles.infoCardTitle}>{title}</h3>
        <p className={styles.infoCardDescription}>{description}</p>
        <div className={styles.infoCardFooter}>
          <button type="button" className={styles.infoCardAuthor}>
            <img src={avatarSrc} alt={author} className={styles.authorAvatar} />
            <span>{author}</span>
          </button>
          <div className={styles.infoCardSocial}>
            <div className={styles.iconCircle}>
              <svg className={styles.icon}>
                <use xlinkHref={`${sprite}#heart`} />
              </svg>
            </div>
            <div className={styles.iconCircle}>
              <svg className={styles.icon}>
                <use xlinkHref={`${sprite}#arrowUpRight`} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
