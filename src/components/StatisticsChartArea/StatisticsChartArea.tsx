import { Chart } from '../Chart.tsx';
import { useStats } from '../../types/useStats.ts';
import { useMemo } from 'react';

import './StatisticsChartArea.css';

export const StatisticsChartArea = () => {
    const currentUsage = useStats();
    const cpuUsage = useMemo(() => currentUsage.map((usage) => usage.cpuUsage), [currentUsage]);
    const freeOperatingMemory = useMemo(() => currentUsage.map((usage) => usage.freeOperatingMemory), [currentUsage]);

    return (
        <div className="chart-area">
            <Chart data={cpuUsage} dataLabel="CPU usage (%)" chartId="cpuUsage" />
            <Chart data={freeOperatingMemory} dataLabel="Free Operating Memory (%)" chartId="freeOperatingMemory" />
        </div>
    );
};
