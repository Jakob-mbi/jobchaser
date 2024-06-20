import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './Search'
import categorySliceReducer from './Category'

export const store = configureStore({
    reducer:{
        serchWord: searchReducer,
        searchCategories: categorySliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;