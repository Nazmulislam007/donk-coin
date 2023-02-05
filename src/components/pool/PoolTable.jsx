import React from 'react';
import { bitcoin, etherium, litecoin, solona, terra } from '../../assets';
import PoolTableRow from './PoolTableRow';

export default function PoolTable() {
    const tradInfo = [
        {
            no: 1,
            icon: terra,
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 2,
            icon: bitcoin,
            name: 'Bitcoin',
            liquidity: '$345,564,839',
            volume: '$23,050',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 3,
            icon: litecoin,
            name: 'Litecoin',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 4,
            icon: solona,
            name: 'Solana',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 5,
            icon: etherium,
            name: 'Etherium',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 6,
            icon: litecoin,
            name: 'Litecoin',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 7,
            icon: terra,
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 8,
            icon: terra,
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 9,
            icon: terra,
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="table-auto min-w-[800px] w-full">
                <thead>
                    <tr>
                        <th className="text-start px-5 pb-[10px] font-medium opacity-40">
                            POOL NAME
                        </th>
                        <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                            ↓ LIQUIDITY
                        </th>
                        <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                            VOLUME (24H)
                        </th>
                        <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                            FEES (24H)
                        </th>
                        <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                            APR (24H)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tradInfo.map((data) => (
                        <PoolTableRow data={data} key={data.no} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
