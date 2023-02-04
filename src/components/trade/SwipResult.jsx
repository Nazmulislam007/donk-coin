import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LineGraph from './LineGraph';

export default function SwipResult({ flipBtn }) {
    const { swip, to } = useSelector((state) => state.token);
    const [activeBtn, setActiveBtn] = useState('1W');

    return (
        <div className="basis-full">
            {swip.selected && to.selected ? (
                <>
                    <header className="grid grid-cols-2 gap-3">
                        <div
                            className={`flex items-center gap-3 max-xl:col-span-2 ${
                                flipBtn ? 'flex-row-reverse justify-end' : ''
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src={`/src/assets/${swip.selected.icon}`}
                                    alt="terra"
                                    className="w-[40px] rounded-full"
                                />
                                <span className="font-semibold dark:text-white uppercase">
                                    {swip.selected.name}
                                </span>
                            </div>
                            <span className="dark:text-white">/</span>
                            <div className="flex items-center gap-2">
                                <img
                                    src={`/src/assets/${to.selected.icon}`}
                                    alt="terra"
                                    className="w-[40px] rounded-full"
                                />
                                <span className="font-semibold dark:text-white uppercase">
                                    {to.selected.name}
                                </span>
                            </div>
                        </div>
                        <ul className="flex items-center gap-1 font-medium px-1 py-1 rounded-lg border border-pink900 text-pink900 dark:text-dark900 dark:border-dark900 w-fit xl:col-span-1 col-span-2 max-xl:row-start-3 max-xl:row-end-4">
                            {['5m', '15m', '1H', '4H', '1D', '1W'].map((duration) => (
                                <li key={duration}>
                                    <button
                                        type="button"
                                        className={`py-1 px-2 hover:bg-pink900 dark:hover:bg-darkHover hover:text-white rounded-md ${
                                            activeBtn === duration
                                                ? 'bg-pink900 dark:bg-darkHover text-white'
                                                : ''
                                        }`}
                                        onClick={() => setActiveBtn(duration)}
                                    >
                                        {duration}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="font-bold text-xl max-xl:col-span-2 dark:text-white">
                            $0.0567
                        </div>
                    </header>
                    <LineGraph />
                </>
            ) : (
                <div className="flex items-center justify-center h-full py-10">
                    No currencies selected
                </div>
            )}
        </div>
    );
}
