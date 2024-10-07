import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CoreState } from '@/types/core.d';

const initialState: CoreState = {
  isSidebarOpen: true,
  modalType: '',
  isModalOpen: false,
};

export type CoreStateKey = keyof CoreState;

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.modalType = action.payload;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.modalType = '';
      state.isModalOpen = false;
    },
  },
});

export const coreAction = coreSlice.actions;
export default coreSlice.reducer;
