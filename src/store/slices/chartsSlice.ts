import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index.ts';
import { ChartIds } from '../../components/BaseChart.tsx';

export type ChartConfiguration = {
    fill: string;
    stroke: string;
    fillOpacity: number;
};

export type ChartConfigurationRequest = {
    type: ChartIds;
    configuration: ChartConfiguration;
};

export interface ChartsState {
    charts: {
        [key: string]: ChartConfiguration;
    };
}

const initialState: ChartsState = {
    charts: {
        cpuUsage: {
            fill: '#32a852',
            stroke: '#3bdb41',
            fillOpacity: 0.8,
        },
        freeOperatingMemory: {
            fill: '#348dd1',
            stroke: '#4a48c7',
            fillOpacity: 0.8,
        },
    },
};

export const chartsSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        adjustChart: (state: RootState, action: PayloadAction<ChartConfigurationRequest>) => {
            state.charts[action.payload.type] = action.payload.configuration;
        },
    },
});
export const chartActions = chartsSlice.actions;
export default chartsSlice.reducer;
