import React from 'react';
import { useDispatch } from 'react-redux';

export default function ExChangeBtn({ img, name, setToggle, toggle }) {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-[#33271E] text-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center min-w-[125px]"
            type="button"
            onClick={() => dispatch(setToggle())}
        >
            {img && <img src={img} alt="salena" className="mr-3 w-[27px] rounded-full" />}
            {name ? (
                <span className="font-semibold w-max">{name}</span>
            ) : (
                <span className="mr-2 py-1 font-medium w-max">Select token</span>
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
