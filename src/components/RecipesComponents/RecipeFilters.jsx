import Select from "react-select";
import { useSearchParams } from "react-router-dom";
import { useGetAreasQuery, useGetIngredientsQuery } from "../../redux";
import styles from "./Recipes.module.css";
import { Icon } from "../shared";

export const RecipeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIngredient = searchParams.get("ingredient") || "";
  const selectedArea = searchParams.get("area") || "";
  const { data: ingredientsData = [], isLoading: ingredientsIsLoading } =
    useGetIngredientsQuery();

  const { data: areasData = [], isLoading: areasIsLoading } =
    useGetAreasQuery();

  const newSearchParams = new URLSearchParams(searchParams);
  const handleFilterChange = (select, field) => {
    const value = field === "area" ? select.label : select.id;
    if (value) {
      newSearchParams.set(field, value);
    } else {
      newSearchParams.delete(field);
    }
    setSearchParams(newSearchParams);
  };

  const resetFilter = (field) => {
    console.log(field);
    newSearchParams.delete(field);
  };

  const mapedIngredients = ingredientsData.map((el) => ({
    label: el.name,
    id: el._id,
    value: el._id,
  }));

  const mapedareasData = areasData.map((el) => ({
    label: el.name,
    id: el._id,
    value: el._id,
  }));

  const customStyles = {
    menu: (provided) => ({
      // 'menu' is from the div class too.
      ...provided,

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
                handleFilterChange(selected, "ingredients")
              }
              options={ingredientsData && mapedIngredients}
            />
            {selectedIngredient && (
              <span
                className={styles.customReset}
                onClick={() => resetFilter("ingredients")}
              >
                <Icon width={18} height={18} id={"close"} />
              </span>
            )}
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
              options={areasData && mapedareasData}
            />
            {selectedArea && (
              <span
                className={styles.customReset}
                onClick={() => resetFilter("area")}
              >
                <Icon width={18} height={18} id={"close"} />
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};
