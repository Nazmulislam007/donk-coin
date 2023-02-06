import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
    },
    {
        name: 'Page B',
        uv: 3000,
    },
    {
        name: 'Page C',
        uv: 2000,
    },
    {
        name: 'Page D',
        uv: 2780,
    },
    {
        name: 'Page E',
        uv: 1890,
    },
    {
        name: 'Page F',
        uv: 2390,
    },
    {
        name: 'Page G',
        uv: 3490,
    },
];

export default function RechartGraph({ duration }) {
    let newData;

    switch (duration) {
        case '1W': {
            newData = data;
            break;
        }
        case '1D': {
            newData = data.slice(1, -1);
            break;
        }
        case '4H': {
            newData = data.slice(2, -1);
            break;
        }
        case '1H': {
            newData = data.slice(3, -1);
            break;
        }
        case '15m': {
            newData = data.slice(4, -1);
            break;
        }
        default:
            newData = data;
            break;
    }

    return (
        <ResponsiveContainer>
            <AreaChart data={newData}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff8e4c" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ff8e4c" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis hide />
                <YAxis hide />
                <Tooltip
                    wrapperStyle={{
                        outline: '0px solid transparent',
                    }}
                    contentStyle={{
                        border: '0px solid transparent',
                        background: 'rgba(255, 255, 255, 0.5)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '5px',
                        minWidth: '150px',
                        padding: '20px',
                    }}
                />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff8e4c"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    animationDuration={100}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
