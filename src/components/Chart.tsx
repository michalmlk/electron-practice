import { useMemo } from 'react';
import BaseChart, { ChartIds } from './BaseChart/BaseChart.tsx';

type ChartProps = {
    data: number[];
    dataLabel: string;
    chartId: ChartIds;
};

export const Chart = ({ data, chartId, dataLabel }: ChartProps) => {
    const chartData = useMemo(
        () =>
            data.map((data) => ({
                value: data,
            })),
        [data]
    );
    return <BaseChart data={chartData} chartId={chartId} dataLabel={dataLabel} />;
};
