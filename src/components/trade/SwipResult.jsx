import React from 'react';
import { bitcoin, solona } from '../../assets';
import LineGraph from './LineGraph';

export default function SwipResult() {
    return (
        <div className="basis-full">
            <header className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 max-xl:col-span-2">
                    <div className="flex items-center gap-2">
                        <img src={solona} alt="terra" width="40" />
                        <span className="font-semibold dark:text-white">TERRA</span>
                    </div>
                    <span className="dark:text-white">/</span>
                    <div className="flex items-center gap-2">
                        <img src={bitcoin} alt="terra" width="40" />
                        <span className="font-semibold dark:text-white">BTC</span>
                    </div>
                </div>
                <ul className="flex items-center font-medium px-1 py-1 rounded-lg border border-pink900 text-pink900 dark:text-dark900 dark:border-dark900 w-fit xl:col-span-1 col-span-2 max-xl:row-start-3 max-xl:row-end-4">
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md cursor-pointer">
                        5m
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md cursor-pointer">
                        15m
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md cursor-pointer">
                        1H
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md cursor-pointer">
                        4H
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md cursor-pointer">
                        1D
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md cursor-pointer">
                        1W
                    </li>
                </ul>
                <div className="font-bold text-xl max-xl:col-span-2 dark:text-white">$0.0567</div>
            </header>
            <LineGraph />
        </div>
    );
}
