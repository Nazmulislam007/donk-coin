import React from 'react';
import './TradTable.css';

export default function TradTable() {
    const tradInfo = [
        {
            no: 1,
            icon: './assets/terra.PNG',
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 2,
            icon: './assets/bitcoin.PNG',
            name: 'Bitcoin',
            volume: '$345,564,839',
            price: '$23,050',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 3,
            icon: './assets/litecoin.PNG',
            name: 'Litecoin',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 4,
            icon: './assets/salena.PNG',
            name: 'Solana',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 5,
            icon: './assets/etherium.PNG',
            name: 'Etherium',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 6,
            icon: './assets/litecoin.PNG',
            name: 'Litecoin',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 7,
            icon: './assets/terra.PNG',
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 8,
            icon: './assets/terra.PNG',
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
        {
            no: 9,
            icon: './assets/terra.PNG',
            name: 'Terra',
            volume: '$345,564,839',
            price: '$67',
            _24H: '24.45%',
            _7D: '7.90%',
        },
    ];

    return (
        <div className="bg-pink100 py-20">
            <section className="max-w-6xl w-[90%] mx-auto">
                <h3 className="text-2xl font-medium mb-10">Top Traded</h3>
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
                                    <td className="text-green-500">{_24H}</td>
                                    <td className="text-green-500">{_7D}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
