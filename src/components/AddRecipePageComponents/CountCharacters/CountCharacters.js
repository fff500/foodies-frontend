import classnames from "classnames";
import styles from "./CountCharacters.module.css";

export const CountCharacters = ({ watch, errors, field }) => {
  if (!errors) return null;

  const watcher = watch(field);

  return (
    <div>
      <span className={styles.countCharatyers}>
        {watcher ? (
          <>
            <span
              className={classnames({
                [styles.errorLimitCount]: errors[field]?.type === "maxLength",
              })}
            >
              {watcher.length}
            </span>
            <span className={styles.countLimit}>/200</span>
          </>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};
