import React, { useState } from 'react';
import SwipOptions from './SwipOptions';

export default function SwipBox() {
    const [showSwipOptions, setShowSwipOptions] = useState(false);

    return (
        <div className="basis-full mt-8 lg:mt-0">
            <button
                type="button"
                className="flex items-center py-2.5 px-5 bg-orange500 rounded-full gap-2 font-medium text-white ml-auto"
            >
                <img src="./assets/settings.svg" alt="setting-icon" />
                Settings
            </button>
            <form className="p-8 sm:px-12 bg-white rounded-2xl lg:mt-16 mt-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col font-semibold text-gray-500 text-xl">
                        Swap
                        <span>0.0</span>
                    </div>
                    <button
                        className="bg-[#33271E] text-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center"
                        type="button"
                        onClick={() => setShowSwipOptions(!showSwipOptions)}
                    >
                        <img
                            src="./assets/terra.PNG"
                            alt="salena"
                            height="27"
                            width="27"
                            className="mr-3"
                        />
                        <span className="mr-5 font-semibold">Solana</span>
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
                </div>
                <label htmlFor="range">
                    <input type="range" id="range" className="w-full" />
                </label>
                <div className="flex items-center justify-between mt-10">
                    <div className="flex flex-col font-semibold text-gray-500 text-xl">
                        To
                        <span>0.0</span>
                    </div>
                    <button
                        className="bg-[#33271E] text-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center"
                        type="button"
                        onClick={() => setShowSwipOptions(!showSwipOptions)}
                    >
                        <img
                            src="./assets/bitcoin.PNG"
                            alt="salena"
                            height="27"
                            width="27"
                            className="mr-3"
                        />
                        <span className="mr-5 font-semibold">Bitcoin</span>
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
                <button
                    type="button"
                    className="bg-orange500 w-[80%] mt-8 mx-[10%] text-white py-2.5 rounded-full"
                >
                    Swap
                </button>
            </form>
        </div>
    );
}
