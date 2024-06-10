import styles from "./RecipeCard.module.css";

const RecipeCard = ({ title, description, imgSrc, alt, author, avatarSrc }) => {
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
          <div className={styles.infoCardAuthor}>
            <img
              loading="lazy"
              src={avatarSrc}
              alt={author}
              className={styles.authorAvatar}
            />
            <span>{author}</span>
          </div>
          <div className={styles.infoCardSocial}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e50090519e9b7041969a1544a3263ef5b3402f0c21ec2056b84a9dbb52215d77?apiKey=77c5825fa18e4b98b9e68a85e10ff135&"
              alt="icon"
              className={styles.icon}
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ba6978f07172e5ee2228a6d94f89ce7c3cf93ef17414d0813fc195aaab76dc?apiKey=77c5825fa18e4b98b9e68a85e10ff135&"
              alt="icon"
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
