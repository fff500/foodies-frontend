import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonRecipeFilters.module.css";

export const SkeletonRecipeFilters = () => (
  <div className={styles.skeletonList}>
    <Skeleton className={styles.skeletonItem} height={45} />
    <Skeleton className={styles.skeletonItem} height={45} />
  </div>
);
