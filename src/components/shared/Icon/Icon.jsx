import classnames from "classnames";
import styles from "./Icon.module.css";
import sprite from "../../../assets/icons/sprite.svg";

export const Icon = ({ id, className, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      id={id}
      className={classnames(styles.icon, className)}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};
