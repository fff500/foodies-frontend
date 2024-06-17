import styles from "./RecipePage.module.css";
import Skeleton from "react-loading-skeleton";

export const RecipePageSkeleton = () => (
  <div className={styles.skeletonWrapper}>
    <div className={styles.skeletonImageWrapper}>
      <Skeleton className={styles.skeletonImage} />
    </div>
    <div className={styles.skeletonTextWrapper}>
      <Skeleton className={styles.skeletonText} />
      <Skeleton height={40} className={styles.skeletonText} />
      <Skeleton height={80} className={styles.skeletonText} />
      <Skeleton height={60} className={styles.skeletonText} />
      <Skeleton height={40} className={styles.skeletonText} />
      <div className={styles.skeletonList}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton
            key={index}
            className={styles.skeletonItem}
            height={80}
            width={80}
          />
        ))}
      </div>
    </div>
  </div>
);
