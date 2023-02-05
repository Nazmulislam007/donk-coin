import React, { useState } from 'react';
import RechartGraph from '../stake/RechartGraph';

export default function GraphSection() {
    const [activeBtn, setActiveBtn] = useState('4H');

    return (
        <section className="basis-full">
            <header
                className="flex items-center justify-between gap-2 flex-wrap
            "
            >
                <div>
                    <p className="font-semibold text-sm text-primary-contrast-100 mb-1 dark:text-dark900">
                        TVL (Total Value Locked)
                    </p>
                    <p className="text-2xl font-semibold dark:text-white">$86,029,43</p>
                </div>
                <ul className="flex items-center gap-1 font-medium px-1 py-1 rounded-md border border-primary-contrast-100 dark:border-dark900 text-primary-contrast-100 dark:text-dark900 w-fit">
                    {['5m', '15m', '1H', '4H'].map((duration) => (
                        <li key={duration}>
                            <button
                                type="button"
                                className={`py-1 px-2 hover:bg-primary-contrast-100 dark:hover:bg-darkHover hover:text-white rounded-md ${
                                    activeBtn === duration
                                        ? 'bg-primary-contrast-100 dark:bg-darkHover text-white'
                                        : ''
                                }`}
                                onClick={() => setActiveBtn(duration)}
                            >
                                {duration}
                            </button>
                        </li>
                    ))}
                </ul>
            </header>
            <div className="my-5 sm:h-[280px] h-[200px]">
                <RechartGraph />
            </div>
        </section>
    );
}
