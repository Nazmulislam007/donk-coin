/* eslint-disable jsx-a11y/control-has-associated-label */
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import TradeCards from './TradeCards';

export default function SwipOptions({ showSwipOptions, setShowSwipOptions }) {
    return (
        <>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] dark:bg-[#0000005d] blur-3xl z-[99] ${
                    showSwipOptions ? 'fixed' : 'hidden'
                }`}
                onClick={() => setShowSwipOptions(false)}
            />
            <div
                className={`${
                    showSwipOptions ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-full max-w-[600px] z-[100] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark300 py-8 rounded-3xl`}
            >
                <div className="sm:w-[85%] w-[90%] mx-auto">
                    <header className="mb-5 flex items-center justify-between">
                        <h3 className="font-semibold text-2xl dark:text-white">Select a token</h3>
                        <button
                            type="button"
                            className="font-semibold text-2xl p-2 rounded-full border w-10 h-10 leading-[10px] dark:text-white"
                            onClick={() => setShowSwipOptions(false)}
                        >
                            x
                        </button>
                    </header>
                    <label
                        htmlFor="search"
                        className="flex items-center gap-2 p-2 border rounded-xl mb-5 dark:text-white"
                    >
                        <SearchIcon />
                        <input
                            type="text"
                            id="search"
                            placeholder="Search by symbol or name"
                            className="w-full outline-none focus:outline-none bg-transparent"
                        />
                    </label>
                    <div className="overflow-x-auto">
                        <ul className="flex items-center justify-between gap-1 text-sm mb-2 min-w-[500px] dark:text-white">
                            <li className="py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover bg-pink100 dark:bg-darkHover cursor-pointer rounded-lg">
                                Solana
                            </li>
                            <li className="py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover cursor-pointer rounded-lg">
                                Top Tokens
                            </li>
                            <li className="py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover cursor-pointer rounded-lg">
                                Large Cap
                            </li>
                            <li className="py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover cursor-pointer rounded-lg">
                                Defi
                            </li>
                            <li className="py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover cursor-pointer rounded-lg">
                                Stablecoins
                            </li>
                        </ul>
                    </div>

                    <TradeCards />
                </div>
            </div>
        </>
    );
}
