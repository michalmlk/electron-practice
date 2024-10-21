import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from './slices/chartsSlice.ts';
import homePageReducer from './slices/homePageSlice.ts';

export const store = configureStore({
    reducer: {
        charts: chartsReducer,
        homePage: homePageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
