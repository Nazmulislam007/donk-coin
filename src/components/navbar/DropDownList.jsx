import React, { useState } from 'react';
import { solona } from '../../assets';

export default function DropDownList() {
    const [showList, setShowList] = useState(false);

    return (
        <div className="relative">
            <button
                className="bg-white dark:bg-dark700 dark:text-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center"
                type="button"
                onClick={() => setShowList(!showList)}
            >
                <img src={solona} alt="salena" height="27" width="27" className="lg:mr-3 mr-1" />
                <span className="mr-5 font-semibold hidden lg:block">Solana</span>
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
                <div className="z-10 absolute left-0 top-[115%] bg-white dark:bg-dark700 rounded-lg shadow min-w-[220px]">
                    <ul className="p-2 text-sm">
                        <li className="flex items-center gap-3 px-4 py-2 dark:text-white hover:bg-dark700 dark:hover:bg-dark500 hover:text-white rounded-lg">
                            <img src={solona} alt="salena" height="27" width="27" />
                            <span className="font-semibold transition-none">Solana</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
