import React from 'react';
import { useDispatch } from 'react-redux';

export default function ExChangeBtn(data) {
    const { flipBtnData } = data || {};
    const { icon, symbol, setToggle, toggle } = flipBtnData;
    const dispatch = useDispatch();

    return (
        <button
            className="bg-[#33271E] text-white font-medium rounded-3xl text-sm px-3 py-2 text-center inline-flex items-center min-w-[125px]"
            type="button"
            onClick={() => dispatch(setToggle())}
        >
            {icon && <img src={icon} alt="salena" className="mr-3 w-[23px] rounded-full" />}
            {symbol ? (
                <span className="font-semibold w-max uppercase">{symbol}</span>
            ) : (
                <span className="mr-1 ml-1 py-1 font-medium w-max">Select token</span>
            )}
            <svg
                className={`w-4 h-4 ml-2 ${toggle ? 'rotate-180' : ''}`}
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
    );
}
