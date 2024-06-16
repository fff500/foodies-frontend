import { useRef, useState } from "react";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import {
  useCreateRecipeMutation,
  useGetAreasQuery,
  useGetCategoriesQuery,
  useGetCurrentUserQuery,
  useGetIngredientsQuery,
} from "../../redux";
import { getSelectOptions, showError } from "../../utils";
import { Button, Icon, LoadingSpinner } from "../shared";
import { IngredientList } from "./IngredientList/";
import { UploadImage } from "./UploadImage";
import { ErrorMessage } from "./ErrorMesage/";
import { CountCharacters } from "./CountCharacters";
import styles from "./AddRecipeForm.module.css";

const defaultValues = {
  thumb: "",
  title: "",
  description: "",
  ingredients: null,
  instructions: "",
  category: "",
  time: 1,
  area: "",
  measure: "",
};

export const AddRecipeForm = () => {
  const { data: categoriesData, isFetching: categoriesIsFetching } =
    useGetCategoriesQuery("?limit=15");
  const {
    data: ingredientsCollection = [],
    isFetching: ingredientsIsFetching,
  } = useGetIngredientsQuery();
  const { data: areas, isFetching: areasIsFetching } = useGetAreasQuery();
  const [create, { isLoading }] = useCreateRecipeMutation();
  const { data: currentUser } = useGetCurrentUserQuery();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    setError,
    watch,
    formState: { errors, isSubmitted },
  } = useForm({ defaultValues, mode: "all" });

  const inputRef = useRef(null);

  const [imageRecipe, setImageRecipe] = useState(null);
  const [newIngredients, setNewIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const onSubmit = ({
    title,
    area,
    category,
    description,
    instructions,
    time,
  }) => {
    const formFields = {
      title,
      description,
      instructions,
      time: time.toString(),
      ingredients,
      area: area.label,
      category: category.label,
    };

    if (!newIngredients.length) {
      return;
    }

    const postData = new FormData();
    postData.append("json", JSON.stringify(formFields));
    postData.append("image", imageRecipe);

    create(postData)
      .unwrap()
      .then((res) => {
        if (res) {
          navigate(`/user/${currentUser._id}`);
        }
      })
      .catch((e) => {
        console.log(e);
        showError(e?.message);
      });
  };

  const onChangeUpload = (e) => {
    if (!!e.target.files) {
      setImageRecipe(e.target.files[0]);
      inputRef.current = null;
    }
  };

  const handleIncrease = () => {
    setValue("time", getValues("time") + 1);
  };

  const handleDecrease = () => {
    if (getValues("time") <= 1) return;
    setValue("time", getValues("time") - 1);
  };

  const handleAddIngredient = () => {
    const ingredient = getValues("ingredients");
    if (!ingredient) return;

    const measure = getValues("measure");

    const { img, label, value } = ingredient;

    setNewIngredients((prev) => [...prev, { img, label, measure, id: value }]);
    setIngredients((prev) => [...prev, { id: value, measure }]);
  };

  const handleReset = () => {
    reset();
    setImageRecipe(null);
    setNewIngredients([]);
  };

  const handleDeleteIngredient = (id) => {
    const callback = (prev) => prev.filter((item) => item.id !== id);

    setNewIngredients(callback);
    setIngredients(callback);
  };

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      padding: "10px 10px 10px 15px!important",
    }),
  };
  console.log({ errors });

  const validateMeasure = (value) => {
    if (value.startsWith("-")) {
      setError("measure", {
        type: "validate",
        message: "can not be negative",
      });
      return false;
    }
    return true;
  };

  if (categoriesIsFetching || ingredientsIsFetching || areasIsFetching) {
    return <LoadingSpinner className={styles.spinner} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <UploadImage
          imageRecipe={imageRecipe}
          inputRef={inputRef}
          control={control}
          onChangeUpload={onChangeUpload}
          errors={errors}
        />

        <div>
          <label htmlFor="title" className={styles.labelName}>
            <input
              type="text"
              id="title"
              name="title"
              {...register("title", { required: true })}
              placeholder="The name of the recipe"
              className={styles.inputName}
            />
            <ErrorMessage errors={errors} type="required" field="title" />
          </label>
          <div className={styles.descriptionWrapper}>
            <textarea
              {...register("description", { required: true, maxLength: 199 })}
              id="description"
              name="description"
              placeholder="Enter a description of the dish"
              className={styles.description}
              maxLength={200}
              rows={1}
            />
            <CountCharacters
              errors={errors}
              watch={watch}
              field="description"
            />
            <ErrorMessage errors={errors} field="description" />
          </div>

          <div className={styles.fieldsWrapper}>
            <div className={classnames(styles.formField, styles.selectWrap)}>
              <label htmlFor="category" className={styles.fieldLabel}>
                Categories
              </label>
              <Controller
                name="category"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    styles={customStyles}
                    className={styles.select}
                    placeholder="Select a category"
                    options={getSelectOptions(categoriesData?.categories)}
                    isClearable={true}
                  />
                )}
              />
              <ErrorMessage errors={errors} field="category" />
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel} htmlFor="time">
                Cooking Time
              </label>
              <div className={styles.timeButtonsWrapper}>
                <Button
                  type="button"
                  className={styles.timeCount}
                  onClick={handleDecrease}
                >
                  -
                </Button>
                <Controller
                  name="time"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="number"
                        className={styles.time}
                        hidden
                      />
                      <span
                        className={styles.time}
                      >{`${getValues("time")} min`}</span>
                    </>
                  )}
                />
                <Button
                  type="button"
                  className={styles.timeCount}
                  onClick={handleIncrease}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.fieldsWrapper}>
            <div className={classnames(styles.formField, styles.selectWrap)}>
              <label htmlFor="ingredients" className={styles.fieldLabel}>
                Ingredient
              </label>
              <Controller
                name="ingredients"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    className={styles.select}
                    placeholder="Add an ingredient"
                    options={getSelectOptions(ingredientsCollection)}
                    styles={customStyles}
                    isClearable={true}
                  />
                )}
              />
              <ErrorMessage errors={errors} field="ingredients" />
            </div>

            <div className={styles.quantityField}>
              <label htmlFor="measure">
                <Controller
                  name="measure"
                  id="measure"
                  control={control}
                  rules={{ required: true, validate: validateMeasure }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      name="measure"
                      placeholder="Enter quantity"
                      className={styles.quantity}
                    />
                  )}
                />
              </label>
              <ErrorMessage errors={errors} field="measure" />
            </div>
          </div>

          <div className={styles.fieldsWrapper}>
            <div className={classnames(styles.formField, styles.selectWrap)}>
              <Button
                type="button"
                className={styles.addIngredientButton}
                onClick={handleAddIngredient}
              >
                Add ingredient &#x2b;
              </Button>
              {newIngredients.length === 0 && isSubmitted && (
                <span className={styles.errorMessage}>
                  Please add at least one ingredient
                </span>
              )}
            </div>
          </div>

          {!!newIngredients.length && (
            <IngredientList
              newIngredients={newIngredients}
              onDelete={handleDeleteIngredient}
            />
          )}

          <div className={classnames(styles.formField, styles.areaField)}>
            <label htmlFor="area" className={styles.fieldLabel}>
              Areas
            </label>
            <Controller
              name="area"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className={styles.select}
                  placeholder="Select a area"
                  options={getSelectOptions(areas)}
                  styles={customStyles}
                  isClearable={true}
                />
              )}
            />
            <ErrorMessage errors={errors} field="area" />
          </div>

          <div className={styles.preparationField}>
            <label htmlFor="instructions" className={styles.fieldLabel}>
              Recipe Preparation
            </label>
            <div className={styles.formPpreparation}>
              <textarea
                id="instructions"
                name="instructions"
                placeholder="Enter recipe"
                rows={1}
                {...register("instructions", {
                  required: true,
                  maxLength: 199,
                })}
                maxLength={200}
                className={styles.description}
              />
              <CountCharacters
                errors={errors}
                watch={watch}
                field="instructions"
              />
              <ErrorMessage errors={errors} field="instructions" />
            </div>
          </div>

          <div className={styles.actionButtons}>
            <Button
              type="button"
              className={styles.trashButton}
              onClick={handleReset}
            >
              <Icon
                width="20"
                height="20"
                id="trash"
                className={styles.buttonIcon}
              />
            </Button>
            <Button type="submit" className={styles.publishButton}>
              Publish
            </Button>
          </div>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
    </>
  );
};
