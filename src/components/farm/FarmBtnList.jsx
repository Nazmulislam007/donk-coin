import React, { useState } from 'react';

export default function FarmBtnList() {
    const [activePool, setActivePool] = useState('All');

    return (
        <div className="flex md:gap-2">
            {['All', 'Top farm', 'Boost', 'My farm'].map((btn, i) => (
                <button
                    className={`py-2 px-3 rounded-lg text-sm font-medium ${
                        activePool === btn
                            ? 'bg-white dark:bg-dark300 dark:text-darkText opacity-100'
                            : 'opacity-50 dark:text-darkText'
                    }`}
                    key={i}
                    onClick={() => setActivePool(btn)}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
}
