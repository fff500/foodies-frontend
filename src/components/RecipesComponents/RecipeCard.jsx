import { Button, Icon } from "../shared";
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
          <Button type="button" className={styles.infoCardAuthor}>
            <img src={avatarSrc} alt={author} className={styles.authorAvatar} />
            <span>{author}</span>
          </Button>
          <div className={styles.infoCardSocial}>
            <div className={styles.iconCircle}>
              <Icon id="heart" className={styles.icon} />
            </div>
            <div className={styles.iconCircle}>
              <Icon id="arrowUpRight" className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
