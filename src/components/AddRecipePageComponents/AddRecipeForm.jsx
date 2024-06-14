import { useRef, useState } from 'react';
import classnames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import {
  useCreateRecipeMutation,
  useGetAreasQuery,
  useGetCategoriesQuery,
  useGetIngredientsQuery,
} from '../../redux';
import { Button, ErrorComponent, LoadingSpinner } from '../shared';
import { getSelectOptions } from '../../utils/getSelectOptions';
import { IngredientList } from './IngredientList/IngredientList';
import { UploadImage } from './UploadImage';
import { ErrorMessage } from './ErrorMesage./ErrorMessage';
import { CountCharacters } from './CountCharacters';
import sprite from '../../assets/icons/sprite.svg';
import { useNavigate } from 'react-router-dom';

import styles from './AddRecipeForm.module.css';

const defaultValues = {
  thumb: '',
  name: '',
  description: '',
  ingredients: null,
  category: '',
  time: 1,
  area: '',
  quantity: '',
};

export const AddRecipeForm = () => {
  const { data: categoriesData, isFetching: categoriesIsFetching } =
    useGetCategoriesQuery('?limit=15');
  const {
    data: ingredientsCollection = [],
    isFetching: ingredientsIsFetching,
  } = useGetIngredientsQuery();
  const { data: areas, isFetching: areasIsFetching } = useGetAreasQuery();
  const [create, { isLoading, error: errorCreate }] = useCreateRecipeMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ defaultValues, mode: 'all' });

  const inputRef = useRef(null);

  const [imageRecipe, setImageRecipe] = useState(null);
  const [newIngredients, setNewIngredients] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const onSubmit = ({
    name,
    area,
    category,
    description,
    preparation,
    time,
  }) => {
    const formData = {
      name,
      description,
      preparation,
      time,
      ingredients: ingredients,
      thumb: imageRecipe,
      area: { _id: area.value },
      category: { _id: category.value },
    };

    create(formData)
      .unwrap()
      .then(res => {
        console.log('response', res);
        if (res) {
          // navigate('/user');
        }
      })
      .catch(error => console.log(error));
  };

  const onChangeUpload = e => {
    if (!!e.target.files) {
      setImageRecipe(e.target.files[0]);
      inputRef.current = null;
    }
  };

  const handleIncrease = () => {
    setValue('time', getValues('time') + 1);
  };

  const handleDecrease = () => {
    if (getValues('time') <= 1) return;
    setValue('time', getValues('time') - 1);
  };

  const handleAddIngredient = () => {
    const ingredient = getValues('ingredients');
    if (!ingredient) return;

    const quantity = getValues('quantity');

    const { img, label, value } = ingredient;
    setNewIngredients(prev => [...prev, { img, label, quantity, id: value }]);
    setIngredients(prev => [...prev, { id: value, quantity }]);
  };

  const handleReset = () => {
    reset();
    setImageRecipe(null);
    setNewIngredients([]);
  };

  const handleDeleteIngredient = id => {
    const callback = prev => prev.filter(item => item.id !== id);

    setNewIngredients(callback);
    setIngredients(callback);
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
          <label className={styles.labelName}>
            <input
              type="text"
              id="name"
              name="name"
              {...register('name', { required: true })}
              placeholder="The name of the recipe"
              className={styles.inputName}
            />
            <ErrorMessage errors={errors} type="required" field="name" />
          </label>
          <div className={styles.descriptionWrapper}>
            <textarea
              {...register('description', { required: true, maxLength: 200 })}
              id="description"
              name="description"
              placeholder="Enter a description of the dish"
              className={styles.description}
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
                    className={styles.select}
                    placeholder="Select a category"
                    options={getSelectOptions(categoriesData?.categories)}
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
                      >{`${getValues('time')} min`}</span>
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
                    className={styles.select}
                    placeholder="Add an ingredient"
                    options={getSelectOptions(ingredientsCollection)}
                    {...field}
                  />
                )}
              />
              <ErrorMessage errors={errors} field="ingredients" />
            </div>

            <div className={styles.quantityField}>
              <label htmlFor="quantity">
                <Controller
                  name="quantity"
                  id="quantity"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      name="quantity"
                      placeholder="Enter quantity"
                      className={styles.quantity}
                    />
                  )}
                />
              </label>
              <ErrorMessage errors={errors} field="quantity" />
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
                  className={styles.select}
                  placeholder="Select a area"
                  options={getSelectOptions(areas)}
                  {...field}
                />
              )}
            />
            <ErrorMessage errors={errors} field="area" />
          </div>

          <div className={styles.preparationField}>
            <label htmlFor="preparation" className={styles.fieldLabel}>
              Recipe Preparation
            </label>
            <div className={styles.formPpreparation}>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Enter recipe"
                {...register('preparation', {
                  required: true,
                  maxLength: 200,
                })}
                maxLength={200}
                className={styles.description}
              />
              <CountCharacters
                errors={errors}
                watch={watch}
                field="preparation"
              />
              <ErrorMessage errors={errors} field="preparation" />
            </div>
          </div>

          <div className={styles.actionButtons}>
            <Button
              type="button"
              className={styles.trashButton}
              onClick={handleReset}
            >
              <svg width="20" height="20" className={styles.buttonIcon}>
                <use href={`${sprite}#trash`} />
              </svg>
            </Button>
            <Button type="submit" className={styles.publishButton}>
              Publish
              {isLoading && <LoadingSpinner className={styles.smallSpinner} />}
            </Button>
          </div>
        </div>
      </form>
      {errorCreate && <ErrorComponent message={errorCreate?.message} />}
    </>
  );
};
