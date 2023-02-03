/* eslint-disable jsx-a11y/control-has-associated-label */
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useStaticStates } from '../context/StaticStatesProvider';
import TokenCard from './TradeCard';

export default function SelectTokens() {
    const { showSelectTokens, showSelectTokensFn } = useStaticStates();
    const [activeBtn, setActiveBtn] = useState('Solona');

    return (
        <>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] dark:bg-[#0000005d] backdrop-blur-sm z-[99] ${
                    showSelectTokens !== '' ? 'fixed' : 'hidden'
                }`}
                onClick={() => showSelectTokensFn('')}
            />
            <div
                className={`${
                    showSelectTokens !== '' ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-[95%] max-w-[520px] z-[100] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark300 py-8 rounded-3xl`}
            >
                <div className="w-[90%] mx-auto">
                    <header className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold text-xl dark:text-white">Select a token</h3>
                        <button
                            type="button"
                            className="font-semibold text-xl p-2 rounded-full border w-10 h-10 leading-[10px] dark:text-white"
                            onClick={() => showSelectTokensFn('')}
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
                    <div className="overflow-x-auto scrollbar-hide">
                        <ul className="flex items-center justify-between gap-1 text-sm mb-2 min-w-[500px] dark:text-white">
                            {['Solona', 'Top Tokens', 'Large Cap', 'Defi', 'Stablecoins'].map(
                                (btn, i) => (
                                    <li key={i}>
                                        <button
                                            type="button"
                                            className={`py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover  ${
                                                activeBtn === btn
                                                    ? 'bg-pink100 dark:bg-darkHover'
                                                    : ''
                                            } rounded-lg`}
                                            onClick={() => setActiveBtn(btn)}
                                        >
                                            {btn}
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="overflow-y-auto h-[400px]">
                        <TokenCard />
                        <TokenCard />
                        <TokenCard />
                        <TokenCard />
                        <TokenCard />
                        <TokenCard />
                        <TokenCard />
                    </div>
                </div>
            </div>
        </>
    );
}
