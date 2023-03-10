import React from 'react';

export default function RemittancesTable() {
    const tradInfo = [
        {
            no: 1,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 2,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 3,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 4,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 5,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 6,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 7,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 8,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
        {
            no: 9,
            timestamp: '2023-01-27 03:48 AM',
            value: '31,498 PTP / 158.1 WAVAX',
            price: '$67,dfa',
        },
    ];

    return (
        <div className="bg-primary-100 dark:bg-dark500 pb-12 pt-8">
            <h3 className="font-semibold mb-5 dark:text-white text-xl">Remittances</h3>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-[450px] w-full">
                    <thead>
                        <tr className="text-sm opacity-40 dark:text-darkText">
                            <th className="text-start pb-[10px] font-normal">TIMESTAMP</th>
                            <th className="text-start pb-[10px] font-normal">FEES COLLECTED</th>
                            <th className="text-end pb-[10px] font-normal">USD REMITTED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tradInfo.map(({ no, timestamp, value, price }) => (
                            <tr key={no} className="rounded-lg text-[13px] dark:text-darkText">
                                <td className="py-[10px] align-middle text-start">{timestamp}</td>
                                <td className="py-[10px] align-middle text-start">{value}</td>
                                <td className="py-[10px] align-middle text-end">{price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
