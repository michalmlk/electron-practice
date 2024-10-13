import { useMemo } from 'react';
import BaseChart from './BaseChart.tsx';

type ChartProps = {
    data: number[];
};

export const Chart = ({ data }: ChartProps) => {
    const chartData = useMemo(
        () =>
            data.map((data) => ({
                value: data,
            })),
        [data]
    );
    return <BaseChart data={chartData} />;
};
