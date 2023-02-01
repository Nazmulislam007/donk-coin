import React from 'react';
import '../home/TradTable.css';

export default function PoolTable() {
    const tradInfo = [
        {
            no: 1,
            icon: './assets/terra.PNG',
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 2,
            icon: './assets/bitcoin.PNG',
            name: 'Bitcoin',
            liquidity: '$345,564,839',
            volume: '$23,050',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 3,
            icon: './assets/litecoin.PNG',
            name: 'Litecoin',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 4,
            icon: './assets/salena.PNG',
            name: 'Solana',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 5,
            icon: './assets/etherium.PNG',
            name: 'Etherium',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 6,
            icon: './assets/litecoin.PNG',
            name: 'Litecoin',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 7,
            icon: './assets/terra.PNG',
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 8,
            icon: './assets/terra.PNG',
            name: 'Terra',
            liquidity: '$345,564,839',
            volume: '$67',
            FEES: '24.45%',
            APR: '7.90%',
        },
        {
            no: 9,
            icon: './assets/terra.PNG',
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
                        <th className="text-start">POOL NAME</th>
                        <th>↓ LIQUIDITY</th>
                        <th>VOLUME (24H)</th>
                        <th>FEES (24H)</th>
                        <th>APR (24H)</th>
                    </tr>
                </thead>
                <tbody>
                    {tradInfo.map(({ no, APR, icon, name, FEES, liquidity, volume }) => (
                        <tr key={no}>
                            <td className="flex items-center justify-start pl-6 gap-2">
                                <img src={icon} alt="terra" width={27} />
                                <img src={icon} alt="terra" width={27} />
                                <span>{name}</span>
                                <span className="px-2 py-[6px] text-xs bg-[#dbdbdb91]">2.08%</span>
                            </td>
                            <td>{liquidity}</td>
                            <td>{volume}</td>
                            <td>{FEES}</td>
                            <td>{APR}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
