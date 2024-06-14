import { Controller } from "react-hook-form";
import { ErrorMessage } from "../ErrorMesage/";
import { Icon } from "../../shared";

import styles from "./UploadImage.module.css";

export const UploadImage = ({
  imageRecipe,
  inputRef,
  control,
  onChangeUpload,
  errors,
}) => {
  return (
    <div className={styles.uploadWrapper}>
      {!imageRecipe && (
        <label htmlFor="thumb" className={styles.photoLabel}>
          <div className={styles.block}>
            <Icon id="photo" width={16} height={16} className={styles.icon} />
          </div>
          <span className={styles.labelText}>Upload a photo</span>
        </label>
      )}

      {imageRecipe && (
        <>
          <div className={styles.photoWrapper}>
            <img
              loading="lazy"
              alt="new recipe"
              src={URL.createObjectURL(imageRecipe)}
              className={styles.imageRecipe}
            />
          </div>

          <label htmlFor="thumb" className={styles.photoLabelImage}>
            Upload another photo
          </label>
        </>
      )}
      <Controller
        name="thumb"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <input
            ref={inputRef}
            type="file"
            id="thumb"
            name="thumb"
            accept="image/png, image/jpeg, image/webp"
            onChange={(e) => {
              onChangeUpload(e);
              onChange(e);
            }}
            hidden
          />
        )}
      />
      <ErrorMessage errors={errors} type="required" field="thumb" />
    </div>
  );
};
