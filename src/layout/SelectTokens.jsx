/* eslint-disable jsx-a11y/control-has-associated-label */
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setHideAll } from '../feature/token/tokenSlice';
import TokenCard from './TokenCard';

export default function SelectTokens() {
    const dispatch = useDispatch();
    const { tokens, filter } = useSelector((state) => state.token) || {};
    const [searchToken, setSearchToken] = useState('');
    const { swip, to } = useSelector((state) => state.token);

    // fetch all catagory and filter duplicate element
    const catagorys = tokens.map((token) => token.catagorys);
    const concatCatagory = catagorys.reduce((prev, curnt) => prev.concat(curnt));
    const uniqueCatagory = [...new Set(concatCatagory)];

    const content = tokens
        .filter((token) => token.name.toLowerCase().includes(searchToken.toLowerCase()))
        .filter((token) => token.catagorys.includes(filter))
        .map((token) => <TokenCard token={token} key={token.uuid} />);

    return (
        <>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] dark:bg-[#0000005d] backdrop-blur-sm z-[99] ${
                    swip.toggle || to.toggle ? 'fixed' : 'hidden'
                }`}
                onClick={() => dispatch(setHideAll(false))}
            />
            <div
                className={`${
                    swip.toggle || to.toggle ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-[95%] max-w-[520px] z-[100] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark300 py-8 rounded-3xl`}
            >
                <div className="w-[90%] mx-auto">
                    <header className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold text-xl dark:text-white">Select a token</h3>
                        <button
                            type="button"
                            className="font-semibold text-xl p-2 rounded-full border w-10 h-10 leading-[10px] dark:text-white"
                            onClick={() => dispatch(setHideAll(false))}
                        >
                            x
                        </button>
                    </header>
                    <label
                        htmlFor="search"
                        className="flex items-center gap-2 p-2 border rounded-md mb-5 dark:text-white"
                    >
                        <SearchIcon />
                        <input
                            type="text"
                            id="search"
                            value={searchToken}
                            onChange={(e) => setSearchToken(e.target.value)}
                            placeholder="Search by symbol or name"
                            className="w-full outline-none focus:outline-none bg-transparent"
                        />
                    </label>
                    <div className="overflow-x-auto scrollbar-hide">
                        <ul className="flex items-center justify-between gap-1 text-sm mb-2 min-w-[470px] dark:text-white">
                            {uniqueCatagory.map((btn, i) => (
                                <li key={i}>
                                    <button
                                        type="button"
                                        className={`py-2 px-3 hover:bg-pink100 dark:hover:bg-darkHover  ${
                                            filter === btn ? 'bg-pink100 dark:bg-darkHover' : ''
                                        } rounded-md`}
                                        onClick={() => dispatch(setFilter(btn))}
                                    >
                                        {btn}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="overflow-y-auto h-[400px]">
                        {content.length !== 0 ? (
                            content
                        ) : (
                            <div className="text-sm text-center pt-8">No match token founded</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
