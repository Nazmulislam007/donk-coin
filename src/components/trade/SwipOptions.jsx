/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function SwipOptions({ showSwipOptions, setShowSwipOptions }) {
    return (
        <>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] blur-3xl z-8 ${
                    showSwipOptions ? 'fixed' : 'hidden'
                }`}
                onClick={() => setShowSwipOptions(false)}
            />
            <div
                className={`${
                    showSwipOptions ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-full max-w-[600px] z-10 -translate-x-1/2 -translate-y-1/2 bg-white py-8 rounded-3xl`}
            >
                <div className="sm:w-[85%] w-[90%] mx-auto">
                    <header className="mb-5 flex items-center justify-between">
                        <h3 className="font-semibold text-2xl">Select a token</h3>
                        <button
                            type="button"
                            className="font-semibold text-2xl p-2 rounded-full border w-10 h-10 leading-[10px]"
                            onClick={() => setShowSwipOptions(false)}
                        >
                            x
                        </button>
                    </header>
                    <label
                        htmlFor="search"
                        className="flex items-center gap-2 p-2 border rounded-xl mb-5"
                    >
                        <span>
                            <img src="./assets/search.PNG" alt="search" width="30" />
                        </span>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search by symbol or name"
                            className="w-full outline-none focus:outline-none"
                        />
                    </label>
                    <div className="overflow-x-auto">
                        <ul className="flex items-center justify-between gap-1 text-sm mb-2 min-w-[500px]">
                            <li className="p-2 hover:bg-pink100 cursor-pointer rounded-lg">
                                Avalanche
                            </li>
                            <li className="p-2 hover:bg-pink100 cursor-pointer rounded-lg">
                                Top Tokens
                            </li>
                            <li className="p-2 hover:bg-pink100 cursor-pointer rounded-lg">
                                Large Cap
                            </li>
                            <li className="p-2 hover:bg-pink100 cursor-pointer rounded-lg">Defi</li>
                            <li className="p-2 hover:bg-pink100 cursor-pointer rounded-lg">
                                Stablecoins
                            </li>
                        </ul>
                    </div>

                    <div className="overflow-y-auto">
                        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 rounded-xl cursor-pointer">
                            <img src="./assets/logo.PNG" alt="logo" width="60" />
                            <header className="mt-2">
                                <div className="flex items-center mb-2">
                                    <h4 className="font-semibold mr-3 leading-[10px]">DONK COIN</h4>
                                    <span className="text-sm font-semibold text-gray-400 leading-[10px]">
                                        Solana
                                    </span>
                                </div>
                                <ul className="flex items-center gap-2 sm:text-sm text-xs font-medium text-gray-400">
                                    <li>Donk Coin</li>
                                    <li>|</li>
                                    <li>Top Tokens</li>
                                    <li>|</li>
                                    <li>Large Caps</li>
                                </ul>
                            </header>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 rounded-xl cursor-pointer">
                            <img src="./assets/logo.PNG" alt="logo" width="60" />
                            <header className="mt-2">
                                <div className="flex items-center mb-2">
                                    <h4 className="font-semibold mr-3 leading-[10px]">DONK COIN</h4>
                                    <span className="text-sm font-semibold text-gray-400 leading-[10px]">
                                        Solana
                                    </span>
                                </div>
                                <ul className="flex items-center gap-2 sm:text-sm text-xs font-medium text-gray-400">
                                    <li>Donk Coin</li>
                                    <li>|</li>
                                    <li>Top Tokens</li>
                                    <li>|</li>
                                    <li>Large Caps</li>
                                </ul>
                            </header>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 rounded-xl cursor-pointer">
                            <img src="./assets/logo.PNG" alt="logo" width="60" />
                            <header className="mt-2">
                                <div className="flex items-center mb-2">
                                    <h4 className="font-semibold mr-3 leading-[10px]">DONK COIN</h4>
                                    <span className="text-sm font-semibold text-gray-400 leading-[10px]">
                                        Solana
                                    </span>
                                </div>
                                <ul className="flex items-center gap-2 sm:text-sm text-xs font-medium text-gray-400">
                                    <li>Donk Coin</li>
                                    <li>|</li>
                                    <li>Top Tokens</li>
                                    <li>|</li>
                                    <li>Large Caps</li>
                                </ul>
                            </header>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 rounded-xl cursor-pointer">
                            <img src="./assets/logo.PNG" alt="logo" width="60" />
                            <header className="mt-2">
                                <div className="flex items-center mb-2">
                                    <h4 className="font-semibold mr-3 leading-[10px]">DONK COIN</h4>
                                    <span className="text-sm font-semibold text-gray-400 leading-[10px]">
                                        Solana
                                    </span>
                                </div>
                                <ul className="flex items-center gap-2 sm:text-sm text-xs font-medium text-gray-400">
                                    <li>Donk Coin</li>
                                    <li>|</li>
                                    <li>Top Tokens</li>
                                    <li>|</li>
                                    <li>Large Caps</li>
                                </ul>
                            </header>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 rounded-xl cursor-pointer">
                            <img src="./assets/logo.PNG" alt="logo" width="60" />
                            <header className="mt-2">
                                <div className="flex items-center mb-2">
                                    <h4 className="font-semibold mr-3 leading-[10px]">DONK COIN</h4>
                                    <span className="text-sm font-semibold text-gray-400 leading-[10px]">
                                        Solana
                                    </span>
                                </div>
                                <ul className="flex items-center gap-2 sm:text-sm text-xs font-medium text-gray-400">
                                    <li>Donk Coin</li>
                                    <li>|</li>
                                    <li>Top Tokens</li>
                                    <li>|</li>
                                    <li>Large Caps</li>
                                </ul>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
