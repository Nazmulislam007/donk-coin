import React from 'react';
import { useSelector } from 'react-redux';
import TradTableRow from './TradTableRow';

export default function TradTable() {
    // const tradInfo = [
    //     {
    //         no: 1,
    //         icon: terra,
    //         name: 'Terra',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 2,
    //         icon: bitcoin,
    //         name: 'Bitcoin',
    //         volume: '$345,564,839',
    //         price: '$23,050',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 3,
    //         icon: litecoin,
    //         name: 'Litecoin',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 4,
    //         icon: solona,
    //         name: 'Solana',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 5,
    //         icon: etherium,
    //         name: 'Etherium',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 6,
    //         icon: litecoin,
    //         name: 'Litecoin',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 7,
    //         icon: terra,
    //         name: 'Terra',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 8,
    //         icon: terra,
    //         name: 'Terra',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    //     {
    //         no: 9,
    //         icon: terra,
    //         name: 'Terra',
    //         volume: '$345,564,839',
    //         price: '$67',
    //         _24H: '24.45%',
    //         _7D: '7.90%',
    //     },
    // ];
    const { tokens } = useSelector((state) => state.token);

    return (
        <div className="bg-pink100 dark:bg-dark500 py-20">
            <section className="max-w-6xl w-[90%] mx-auto">
                <h3 className="text-2xl font-medium mb-10 dark:text-white">Top Traded</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-[800px] w-full">
                        <thead>
                            <tr>
                                <th className="text-start px-5 pb-[10px] font-medium opacity-40">
                                    #
                                </th>
                                <th className="text-start px-5 pb-[10px] font-medium opacity-40">
                                    TOKEN
                                </th>
                                <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                                    ↓ VOLUME (24H)
                                </th>
                                <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                                    PRICE
                                </th>
                                <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                                    CHANGE (24H)
                                </th>
                                <th className="text-center px-5 pb-[10px] font-medium opacity-40">
                                    CHANGE (7D)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokens.map((rowData) => (
                                <TradTableRow rowData={rowData} key={rowData.uuid} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
