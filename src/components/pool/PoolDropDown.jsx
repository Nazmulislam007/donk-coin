import React, { useState } from 'react';

export default function PoolDropDown() {
    const [showList, setShowList] = useState(false);
    const [activePool, setActivePool] = useState('All Pools');

    const handleActivePools = (pool) => {
        setActivePool(pool);
        setShowList(false);
    };

    return (
        <div className="relative">
            <button
                className="bg-white dark:bg-dark700 dark:text-white font-medium rounded-3xl text-sm sm:px-5 px-3 sm:py-3 py-2 text-center inline-flex items-center min-w-max"
                type="button"
                onClick={() => setShowList(!showList)}
            >
                <span className="sm:mr-5 font-semibold">{activePool}</span>
                <svg
                    className={`w-4 h-4 ml-2 ${showList ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {showList && (
                <div className="z-10 absolute left-0 top-[115%] bg-white dark:bg-dark700 dark:text-white rounded-lg shadow w-full ">
                    <ul className="p-2 text-sm">
                        <li>
                            <button
                                type="button"
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark500 font-semibold rounded-lg w-full text-start"
                                onClick={() => handleActivePools('All Pools')}
                            >
                                All Pools
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark500 font-semibold rounded-lg w-full text-start"
                                onClick={() => handleActivePools('V1 Pools')}
                            >
                                V1 Pools
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark500 font-semibold rounded-lg w-full text-start"
                                onClick={() => handleActivePools('V2 Pools')}
                            >
                                V2 Pools
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
