import { Chart } from '../Chart.tsx';
import { useStats } from '../../types/useStats.ts';
import { useMemo } from 'react';

import './StatisticsChartArea.css';
import { ChartIds } from '../BaseChart/BaseChart.tsx';
import { useAppSelector } from '../../store/hooks.ts';

export type ChartConfiguration = {
    id: ChartIds;
    dataLabel: string;
    data: number[];
};

export const StatisticsChartArea = () => {
    const currentUsage = useStats();
    const cpuUsage = useMemo(() => currentUsage.map((usage) => usage.cpuUsage), [currentUsage]);
    const freeOperatingMemory = useMemo(() => currentUsage.map((usage) => usage.freeOperatingMemory), [currentUsage]);
    const { visibleChartIds } = useAppSelector((state) => state.homePage);
    const { charts } = useAppSelector((state) => state.charts);

    const chartsConfiguration: ChartConfiguration[] = [
        {
            id: 'cpuUsage',
            dataLabel: charts['cpuUsage'].dataLabel,
            data: cpuUsage,
        },
        {
            id: 'freeOperatingMemory',
            dataLabel: charts['freeOperatingMemory'].dataLabel,
            data: freeOperatingMemory,
        },
    ];

    return (
        <div className="chart-area">
            {chartsConfiguration.length > 0 &&
                chartsConfiguration
                    .filter((ch) => visibleChartIds.includes(ch.id))
                    .map(({ id, data, dataLabel }: ChartConfiguration) => <Chart data={data} dataLabel={dataLabel} chartId={id} />)}
        </div>
    );
};
