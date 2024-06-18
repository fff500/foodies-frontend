import Skeleton from "react-loading-skeleton";
import styles from "./Recipes.module.css";

export const RecipesSkeleton = () => (
  <div className={styles.skeletonList}>
    {Array.from({ length: 12 }).map((_, index) => (
      <div key={index}>
        <Skeleton className={styles.skeletonItem} />
        <Skeleton height={24} style={{ marginBottom: 10 }} />
        <Skeleton height={60} style={{ marginBottom: 10 }} />
        <Skeleton height={60} />
      </div>
    ))}
  </div>
);
