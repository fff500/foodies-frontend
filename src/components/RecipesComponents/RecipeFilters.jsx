import Select from "react-select";
import { useSearchParams } from "react-router-dom";
import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";
import styles from "./Recipes.module.css";

export const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: ingredientsData = [], isLoading: ingredientsIsLoading } =
    useGetIngredientsQuery();

  const { data: areasData = [], isLoading: areasIsLoading } =
    useGetAreasQuery();

  const newSearchParams = new URLSearchParams(searchParams);
  const handleFilterChange = (select, field) => {
    let value;
    if (select) {
      value = field === "area" ? select.label : select.id;
    }
    if (value) {
      newSearchParams.set(field, value);
    } else {
      newSearchParams.delete(field);
    }
    setSearchParams(newSearchParams);
  };

  const resetFilter = (field) => {
    searchParams.delete(field);
    setSearchParams(searchParams);
  };

  const mappedIngredients = ingredientsData.map((el) => ({
    label: el.name,
    id: el._id,
    value: el._id,
  }));

  const mappedAreasData = areasData.map((el) => ({
    label: el.name,
    id: el._id,
    value: el._id,
  }));

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      padding: "10px 10px 10px 15px!important",
      zIndex: 100,
    }),
  };

  return (
    <div className={styles.filtersSelect}>
      <div className={styles.selectWrapper}>
        {!ingredientsIsLoading && (
          <>
            <Select
              styles={customStyles}
              className={styles.select}
              placeholder="Ingredients"
              onChange={(selected) =>
                handleFilterChange(selected, "ingredient")
              }
              options={ingredientsData && mappedIngredients}
              isClearable={true}
              clearValue={() => resetFilter("ingredient")}
            />
          </>
        )}
      </div>
      <div className={styles.selectWrapper}>
        {!areasIsLoading && (
          <>
            <Select
              styles={customStyles}
              className={styles.select}
              placeholder="Area"
              onChange={(selected) => handleFilterChange(selected, "area")}
              options={areasData && mappedAreasData}
              isClearable={true}
              clearValue={() => resetFilter("area")}
            />
          </>
        )}
      </div>
    </div>
  );
};
