import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSwipToken, selectToToken, setFilter, setHideAll } from '../feature/token/tokenSlice';

export default function TokenCard({ token }) {
    const dispatch = useDispatch();
    const { symbol, name, icon, catagorys } = token || {};

    const { swip, to } = useSelector((state) => state.token);
    const swipToggle = swip.toggle;
    const toToggle = to.toggle;

    return (
        <div
            role="button"
            tabIndex="0"
            className="flex items-center gap-3 py-4 px-3 hover:bg-pink100 dark:hover:bg-darkHover rounded-md w-full"
            onClick={() => {
                dispatch(setHideAll());
                if (toToggle) return dispatch(selectToToken(token));
                if (swipToggle) return dispatch(selectSwipToken(token));
                return true;
            }}
        >
            <img src={`/src/assets/${icon}`} alt={name} className="w-9 rounded-full" />
            <header>
                <div className="flex items-center mb-2 uppercase">
                    <h4 className="font-semibold mr-3 leading-[10px] dark:text-white">{symbol}</h4>
                    <span className="text-sm text-gray-400 leading-[10px]">{name}</span>
                </div>
                <ul className="flex items-center gap-3 text-xs text-gray-400 ">
                    {catagorys.map((cata, i) => (
                        <li key={i}>
                            <button
                                type="button"
                                onClick={() => dispatch(setFilter(cata))}
                                className="hover:dark:text-darkText hover:underline hover:text-black"
                            >
                                {cata}
                            </button>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}
