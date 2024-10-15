import { useMemo } from 'react';
import BaseChart, { ChartIds } from './BaseChart.tsx';

type ChartProps = {
    data: number[];
    dataLabel: string;
    chartId: ChartIds;
};

export const Chart = ({ data, dataLabel, chartId }: ChartProps) => {
    const chartData = useMemo(
        () =>
            data.map((data) => ({
                value: data,
            })),
        [data]
    );
    return <BaseChart data={chartData} dataLabel={dataLabel} chartId={chartId} />;
};
