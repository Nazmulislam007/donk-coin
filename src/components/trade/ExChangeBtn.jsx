import React from 'react';
import { useStaticStates } from '../../context/StaticStatesProvider';

export default function ExChangeBtn({ img, name }) {
    const { showSelectTokens, showSelectTokensFn } = useStaticStates();

    return (
        <button
            className="bg-[#33271E] text-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center"
            type="button"
            onClick={() => showSelectTokensFn(name)}
        >
            <img src={img} alt="salena" height="27" width="27" className="mr-3" />
            <span className="mr-5 font-semibold">{name}</span>
            <svg
                className={`w-4 h-4 ml-2 ${showSelectTokens === name ? 'rotate-180' : ''}`}
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
