import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalType: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload: { modalType, to } }) => {
      state.isOpen = true;
      state.modalType = modalType;
      state.to = to;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.to = null;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
