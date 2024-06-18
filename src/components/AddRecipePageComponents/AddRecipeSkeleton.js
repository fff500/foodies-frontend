import styles from "./AddRecipeForm.module.css";
import Skeleton from "react-loading-skeleton";

export const AddRecipeSkeleton = () => (
  <div>
    <div className={styles.skeletonWrapper}>
      <div className={styles.skeletonImageWrapper}>
        <Skeleton className={styles.skeletonImage} />
      </div>
      <div className={styles.skeletonTextWrapper}>
        <Skeleton height={40} className={styles.skeletonText} />
        <Skeleton height={80} className={styles.skeletonText} />
        <Skeleton height={60} className={styles.skeletonText} />
        <Skeleton height={40} count={5} className={styles.skeletonText} />
      </div>
    </div>
  </div>
);
