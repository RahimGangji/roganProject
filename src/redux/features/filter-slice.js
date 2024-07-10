import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    categories: [],
    price: 0,
    sizes: [],
    colors: [],
    selectedItem: '',
    searchValue: '',
    item_offset: 0,
    forcePage: null,
  },
  reducers: {
    getCategories: (state, { payload }) => {
      if (state.categories.includes(payload.category)) {
        state.categories = state.categories.filter(item => item !== payload.category);
        state.price = payload.maxPrice;
      }
      else {
        state.categories.push(payload.category);
        state.price = payload.maxPrice;
      }
    },
    getPrice: (state, { payload }) => {
      state.price = payload;
    },
    add_size: (state, { payload }) => {
      if (state.sizes.includes(payload.size)) {
        state.sizes = state.sizes.filter(item => item !== payload.size);
        state.price = payload.maxPrice;
      }
      else {
        state.sizes.push(payload.size);
        state.price = payload.maxPrice;
      }
    },
    add_color: (state, { payload }) => {
      if (state.colors.includes(payload.color)) {
        state.colors = state.colors.filter(item => item !== payload.color);
        state.price = payload.maxPrice;
      }
      else {
        state.colors.push(payload.color);
        state.price = payload.maxPrice;
      }
    },
    add_select_item: (state, { payload }) => {
      state.selectedItem = payload;
    },
    add_search_value: (state, { payload }) => {
      state.searchValue = payload;
    },
    add_item_offset: (state, { payload }) => {
      state.item_offset = payload;
    },
    add_force_page: (state, { payload }) => {
      state.forcePage = payload;
    },
  }
})

export const { getCategories, getPrice, add_size, add_color, add_select_item, add_search_value, add_force_page, add_item_offset } = filterSlice.actions;
export default filterSlice.reducer;