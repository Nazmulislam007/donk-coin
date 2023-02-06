import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function RechartGraph({ duration }) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = [
        {
            time: 1,
            uv: 4000,
            pv: 2400,
        },
        {
            time: 2,
            uv: 3000,
            pv: 1398,
        },
        {
            time: 3,
            uv: 2000,
            pv: 9800,
        },
        {
            time: 4,
            uv: 2780,
            pv: 3908,
        },
        {
            time: 5,
            uv: 1890,
            pv: 4800,
        },
        {
            time: 6,
            uv: 2390,
            pv: 3800,
        },
        {
            time: 7,
            uv: 3490,
            pv: 4300,
        },
    ];

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
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis style={{ fontSize: '12px' }} />
                <YAxis style={{ fontSize: '12px' }} />
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
                    animationDuration={0}
                />
                <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    animationDuration={0}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}
