import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RechartGraph from './RechartGraph';

export default function SwipResult({ flipBtn }) {
    const { swip, to } = useSelector((state) => state.token);
    const [duration, setDuration] = useState('1D');

    return (
        <div className="basis-full">
            {swip.selected && to.selected ? (
                <>
                    <header className="grid grid-cols-2 gap-3 mb-14 ">
                        <div
                            className={`flex items-center gap-3 max-xl:col-span-2 ${
                                flipBtn ? 'flex-row-reverse justify-end' : ''
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src={`${swip.selected.icon}`}
                                    alt="terra"
                                    className="w-[40px] rounded-full"
                                />
                                <span className="font-semibold dark:text-white uppercase">
                                    {swip.selected.symbol}
                                </span>
                            </div>
                            <span className="dark:text-white">/</span>
                            <div className="flex items-center gap-2">
                                <img
                                    src={`${to.selected.icon}`}
                                    alt="terra"
                                    className="w-[40px] rounded-full"
                                />
                                <span className="font-semibold dark:text-white uppercase">
                                    {to.selected.symbol}
                                </span>
                            </div>
                        </div>
                        <ul className="flex items-center gap-1 font-medium px-1 py-1 rounded-lg border border-primary-contrast-100 text-primary-contrast-100 dark:text-dark900 dark:border-dark900 w-fit xl:col-span-1 col-span-2 max-xl:row-start-3 max-xl:row-end-4">
                            {['15m', '1H', '4H', '1D', '1W'].map((time) => (
                                <li key={time}>
                                    <button
                                        type="button"
                                        className={`py-1 px-2 hover:bg-primary-contrast-100 dark:hover:bg-darkHover hover:text-white rounded-md ${
                                            duration === time
                                                ? 'bg-primary-contrast-100 dark:bg-darkHover text-white'
                                                : ''
                                        }`}
                                        onClick={() => setDuration(time)}
                                    >
                                        {time}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="font-bold text-xl max-xl:col-span-2 dark:text-white">
                            ${flipBtn ? to.selected?.price : swip.selected?.price}
                        </div>
                    </header>
                    <div className="my-5 sm:h-[300px] h-[200px]">
                        <RechartGraph duration={duration} />
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-full py-10">
                    No currencies selected
                </div>
            )}
        </div>
    );
}
