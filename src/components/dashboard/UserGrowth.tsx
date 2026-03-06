import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { name: 'Jan', active: 4000, new: 2400 },
    { name: 'Feb', active: 3000, new: 1398 },
    { name: 'Mar', active: 2000, new: 9800 },
    { name: 'Apr', active: 2780, new: 3908 },
    { name: 'May', active: 1890, new: 4800 },
    { name: 'Jun', active: 2390, new: 3800 },
    { name: 'Jul', active: 3490, new: 4300 },
];

export function UserGrowth() {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888888" opacity={0.2} />
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Tooltip
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                />
                <Line
                    type="monotone"
                    dataKey="active"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                />
                <Line
                    type="monotone"
                    dataKey="new"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}
