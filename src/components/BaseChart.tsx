import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

export interface BaseChartProps {
    data: { value: number | undefined }[];
}

export default function BaseChart({ data }: BaseChartProps) {
    return (
        <AreaChart width={480} height={240} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="value" />
            <YAxis domain={[0, 100]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="green" fill="green" fillOpacity={0.5} isAnimationActive={false} />
        </AreaChart>
    );
}
