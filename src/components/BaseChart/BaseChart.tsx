import { Area, AreaChart, Tooltip, YAxis } from 'recharts';
import { useSelector } from 'react-redux';
import './BaseChart.css';

export type ChartIds = 'cpuUsage' | 'freeOperatingMemory';

export type BaseChartProps = {
    data: { value: number | undefined }[];
    dataLabel: string;
    chartId: ChartIds;
};

export default function BaseChart({ data, dataLabel, chartId }: BaseChartProps) {
    const { charts } = useSelector((state) => state.charts);
    const { fill, stroke, fillOpacity } = charts[chartId];

    return (
        <div className="base-chart-wrapper">
            <AreaChart width={320} height={120} data={data}>
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke={stroke} fill={fill} fillOpacity={fillOpacity} isAnimationActive={false} />
            </AreaChart>
            <p>
                {dataLabel} {data[data.length - 1]?.value} %
            </p>
        </div>
    );
}
