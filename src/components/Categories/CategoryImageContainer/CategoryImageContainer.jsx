import classnames from "classnames";
import styles from "./CategoryImageContainer.module.css";

export const CategoryImageContainer = ({
  categoryImageUrl,
  categoryImageUrl_x2,
  children,
}) => {
  const backgroundImageStyle = {
    background: `linear-gradient(0deg, rgba(5, 5, 5, 0.18) 0%, rgba(5, 5, 5, 0.18) 100%), url(${categoryImageUrl}) center center / cover no-repeat`,
  };

  const backgroundImageStyleHighRes = {
    background: `linear-gradient(0deg, rgba(5, 5, 5, 0.18) 0%, rgba(5, 5, 5, 0.18) 100%), url(${categoryImageUrl_x2}) center center / cover no-repeat`,
  };

  return (
    <div
      className={classnames(styles.imageContainer)}
      style={
        window.devicePixelRatio >= 2
          ? backgroundImageStyleHighRes
          : backgroundImageStyle
      }
    >
      {children}
    </div>
  );
};
