import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

export default function Filter() {
    const [sort, setSort] = useState('Liquidity');

    return (
        <div className="flex items-center justify-between gap-5 mt-8 mb-10 max-lg:flex-col">
            <label
                htmlFor="cardsearch"
                className="flex lg:max-w-sm flex-1 items-center gap-2 p-2 border border-gray-300 rounded-md max-lg:w-full dark:text-darkText dark:border-dark900"
            >
                <SearchIcon />
                <input
                    type="text"
                    id="cardsearch"
                    placeholder="Search by symbol or name"
                    className="w-full outline-none focus:outline-none text-sm bg-transparent"
                />
            </label>
            <div className="text-sm flex items-center gap-2 max-lg:mr-auto dark:text-darkText">
                <span>Sort by:</span>
                <button
                    className={`${sort === 'Liquidity' ? 'font-semibold' : ''}`}
                    onClick={() => setSort('Liquidity')}
                >
                    Liquidity
                </button>
                <span> | </span>
                <button
                    className={`${sort === 'APR' ? 'font-semibold' : ''}`}
                    onClick={() => setSort('APR')}
                >
                    APR
                </button>
            </div>
        </div>
    );
}
