/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import ConnectWalletBtn from '../../layout/ConnectWalletBtn';

export default function CreatePool() {
    const [showHide, setShowHide] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setShowHide(true)}
                className="py-2 px-4 h-11 border-2 text-pink900 border-pink900 dark:border-dark900 dark:text-darkText rounded-md text-sm max-lg:w-full hover:bg-[#e8e2de] dark:hover:bg-darkHover"
            >
                Create New Pool
            </button>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] dark:bg-[#0000005d] backdrop-blur-sm z-[99] ${
                    showHide ? 'fixed' : 'hidden'
                }`}
                onClick={() => setShowHide(false)}
            />
            <div
                className={`${
                    showHide ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-[95%] max-w-[480px] z-[100] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark300 py-8 rounded-3xl`}
            >
                <div className="sm:px-8 px-4">
                    <p className="text-xl font-semibold dark:text-darkText">Add Liquidity</p>
                    <label
                        htmlFor="minute"
                        className="flex items-center gap-1 rounded-xl border dark:border-dark900 p-1 pl-4 border-gray-300 my-5"
                    >
                        <input
                            type="number"
                            className="dark:text-darkText bg-transparent focus:bg-transparent outline-none flex-1 w-full"
                            placeholder="Enter Amount"
                        />
                        <button
                            type="submit"
                            className="fic gap-2 bg-pink100 py-2 px-3 rounded-lg ml-1 dark:bg-dark700 dark:text-darkText"
                        >
                            <p className="font-semibold text-sm">Litecoin</p>
                            <svg
                                className={`w-4 h-4 ml-2 ${showHide ? 'rotate-180' : ''}`}
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
                    </label>
                    <label
                        htmlFor="minute"
                        className="flex items-center gap-1 rounded-xl border dark:border-dark900 p-1 pl-4 border-gray-300 my-5"
                    >
                        <input
                            type="number"
                            className="dark:text-darkText bg-transparent focus:bg-transparent outline-none flex-1 w-full"
                            placeholder="Enter Amount"
                        />
                        <button
                            type="submit"
                            className="fic gap-2 bg-pink100 py-2 px-3 rounded-lg ml-1 dark:bg-dark700 dark:text-darkText"
                        >
                            <p className="font-semibold text-sm">Litecoin</p>
                            <svg
                                className={`w-4 h-4 ml-2 ${showHide ? 'rotate-180' : ''}`}
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
                    </label>
                    <ConnectWalletBtn removeCreatePool={setShowHide} />
                </div>
            </div>
        </>
    );
}
