import React, { useState } from 'react';
import SwipOptions from './SwipOptions';

export default function ExChangeBtn({ img, name }) {
    const [showSwipOptions, setShowSwipOptions] = useState(false);

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col font-semibold text-gray-500 text-xl">
                To
                <span>0.0</span>
            </div>
            <button
                className="bg-[#33271E] text-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center"
                type="button"
                onClick={() => setShowSwipOptions(!showSwipOptions)}
            >
                <img src={img} alt="salena" height="27" width="27" className="mr-3" />
                <span className="mr-5 font-semibold">{name}</span>
                <svg
                    className={`w-4 h-4 ml-2 ${showSwipOptions ? 'rotate-180' : ''}`}
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
            <SwipOptions
                showSwipOptions={showSwipOptions}
                setShowSwipOptions={setShowSwipOptions}
            />
        </div>
    );
}
