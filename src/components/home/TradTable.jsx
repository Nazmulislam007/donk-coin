import React from 'react';
import { bitcoin, etherium, litecoin, solona, terra } from '../../assets';
import './TradTable.css';

export default function TradTable() {
    const tradInfo = [
        {
            no: 1,
            icon: terra,
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 2,
            icon: bitcoin,
            name: 'Bitcoin',
            volume: '$345,564,839',
            price: '$23,050',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 3,
            icon: litecoin,
            name: 'Litecoin',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 4,
            icon: solona,
            name: 'Solana',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 5,
            icon: etherium,
            name: 'Etherium',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 6,
            icon: litecoin,
            name: 'Litecoin',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 7,
            icon: terra,
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 8,
            icon: terra,
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 9,
            icon: terra,
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
    ];

    return (
        <div className="bg-pink100 dark:bg-dark500 py-20">
            <section className="max-w-6xl w-[90%] mx-auto">
                <h3 className="text-2xl font-medium mb-10 dark:text-white">Top Traded</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-[800px] w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>TOKEN</th>
                                <th>↓ VOLUME (24H)</th>
                                <th>PRICE</th>
                                <th>CHANGE (24H)</th>
                                <th>CHANGE (7D)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tradInfo.map(({ no, _24H, _7D, icon, name, price, volume }) => (
                                <tr key={no}>
                                    <td>{no}</td>
                                    <td className="flex items-center justify-center gap-2">
                                        <img src={icon} alt="terra" width={25} />
                                        <span>{name}</span>
                                    </td>
                                    <td>{volume}</td>
                                    <td>{price}</td>
                                    <td className="!text-green-500">{_24H}</td>
                                    <td className="!text-green-500">{_7D}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
