import { useMemo } from 'react';
import BaseChart from './BaseChart.tsx';

type ChartProps = {
    data: number[];
    dataLabel: string;
};

export const Chart = ({ data, dataLabel }: ChartProps) => {
    const chartData = useMemo(
        () =>
            data.map((data) => ({
                value: data,
            })),
        [data]
    );
    return <BaseChart data={chartData} dataLabel={dataLabel} />;
};
