import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartIds } from '../../components/BaseChart/BaseChart.tsx';

export type HomePageSate = {
    visibleChartIds: ChartIds[];
};

const initialState: HomePageSate = {
    visibleChartIds: ['freeOperatingMemory', 'cpuUsage'],
};

export const homePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setCharts: (state: HomePageSate, action: PayloadAction<ChartIds[]>) => {
            console.log(action.payload);
            state.visibleChartIds = action.payload;
        },
    },
});

export const homePageActions = homePageSlice.actions;
export default homePageSlice.reducer;
