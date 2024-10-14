import { Area, AreaChart, CartesianGrid, Label, Tooltip, XAxis, YAxis } from 'recharts';

export interface BaseChartProps {
    data: { value: number | undefined }[];
    dataLabel: string;
}

export default function BaseChart({ data, dataLabel }: BaseChartProps) {
    return (
        <AreaChart width={480} height={150} data={data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="value">
                <Label value={dataLabel} offset={0} position="bottom" />
            </XAxis>
            <YAxis domain={[0, 100]} />
            <CartesianGrid strokeDasharray="6 6" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="green" fill="green" fillOpacity={0.5} isAnimationActive={false} />
        </AreaChart>
    );
}
