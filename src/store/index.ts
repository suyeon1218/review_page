import { createSlice, configureStore } from '@reduxjs/toolkit';
import { MovieCategory, Sort, View } from '~/types';

interface FilterState {
  keyword: string;
  category: MovieCategory[];
}

interface ViewState {
  view: View;
}

interface SortState {
  sort: Sort;
}

const initalFilter: FilterState = {
  keyword: '',
  category: [],
};

const initialView: ViewState = {
  view: 'LIST',
};

const initialSort: SortState = {
  sort: 'DATE_ASCENDING',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initalFilter,
  reducers: {
    setKeyword: (state, action) => {
      const { keyword } = action.payload;

      state.keyword = keyword;
    },
    setCategory: (state, action) => {
      const { category } = action.payload;

      state.category = category;
    },
  },
});

const viewSlice = createSlice({
  name: 'view',
  initialState: initialView,
  reducers: {
    setView: (state, action) => {
      const { view } = action.payload;

      state.view = view;
    },
  },
});

const sortSlice = createSlice({
  name: 'sort',
  initialState: initialSort,
  reducers: {
    setSort: (state, action) => {
      const { sort } = action.payload;

      state.sort = sort;
    },
  },
});

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    view: viewSlice.reducer,
    sort: sortSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const { setCategory, setKeyword } = filterSlice.actions;
export const { setSort } = sortSlice.actions;
export const { setView } = viewSlice.actions;
