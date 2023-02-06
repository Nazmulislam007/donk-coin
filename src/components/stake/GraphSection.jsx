import React, { useState } from 'react';
import RechartGraph from './RechartGraph';

export default function GraphSection() {
    const [duration, setDuration] = useState('4H');

    return (
        <section>
            <header
                className="flex items-center justify-between gap-2 flex-wrap
            "
            >
                <div>
                    <p className="font-semibold text-sm text-primary-contrast-100 mb-1  dark:text-dark900">
                        TVL (Total Value Locked)
                    </p>
                    <p className="text-2xl font-semibold  dark:text-white">$86,029,43</p>
                </div>
                <ul className="flex items-center gap-1 font-medium px-1 py-1 rounded-md border border-primary-contrast-100 text-primary-contrast-100 w-fit dark:text-dark900 dark:border-dark900">
                    {['15m', '1H', '4H', '1D'].map((time) => (
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
            </header>
            {/* <Graph /> */}
            <div className="my-5 sm:h-[300px] h-[200px]">
                <RechartGraph duration={duration} />
            </div>
        </section>
    );
}
