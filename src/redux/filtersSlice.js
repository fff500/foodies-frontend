import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedIngredient: "",
    selectedArea: "",
  },
  reducers: {
    setSelectedIngredient: (state, action) => {
      state.selectedIngredient = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedArea = action.payload;
    },
  },
});

export const { setSelectedIngredient, setSelectedArea } = filtersSlice.actions;

export default filtersSlice.reducer;
