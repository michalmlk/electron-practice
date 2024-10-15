import { Area, AreaChart, CartesianGrid, Label, Tooltip, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';

export type ChartIds = 'cpuUsage' | 'freeOperatingMemory';

export interface BaseChartProps {
    data: { value: number | undefined }[];
    dataLabel: string;
    chartId: ChartIds;
}

export default function BaseChart({ data, dataLabel, chartId }: BaseChartProps) {
    const { charts } = useSelector((state) => state.charts);
    const { fill, stroke, fillOpacity } = charts[chartId];

    return (
        <AreaChart width={440} height={130} data={data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="value">
                <Label value={dataLabel} offset={0} position="bottom" />
            </XAxis>
            <YAxis domain={[0, 100]} />
            <CartesianGrid />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke={stroke} fill={fill} fillOpacity={fillOpacity} isAnimationActive={false} />
        </AreaChart>
    );
}
