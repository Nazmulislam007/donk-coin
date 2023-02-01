/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ setConnectWallet }) {
    const [showList, setShowList] = useState(false);
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="bg-pink100 md:py-6 py-2">
            <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-[90%]">
                <Link to="/" className="h-16 w-16 min-w-[4rem]">
                    <img src="./assets/logo.PNG" alt="logo" />
                </Link>
                <ul className="max-md:fixed z-50 max-md:bg-white max-md:w-full max-md:bottom-0 max-md:left-0 justify-around flex items-center md:gap-10 text-pink900 font-medium">
                    <li className="py-1 px-2 hover:bg-[#cdcdcd6a] transition-all basis-full max-md:py-3 text-center">
                        <Link to="/trade">Trade</Link>
                    </li>
                    <li className="py-1 px-2 hover:bg-[#cdcdcd6a]  transition-all basis-full max-md:py-3 text-center">
                        <Link to="/pool">Pool</Link>
                    </li>
                    <li className="py-1 px-2 hover:bg-[#cdcdcd6a] transition-all basis-full max-md:py-3 text-center">
                        <Link to="/stake">Stake</Link>
                    </li>
                    <li className="xl:hidden relative py-1 px-2 hover:bg-[#cdcdcd6a] transition-all basis-full text-center">
                        <button className="w-full max-md:py-3" onClick={() => setToggle(!toggle)}>
                            <MoreHorizIcon />
                        </button>

                        <ul
                            className={`absolute md:top-[150%] max-md:-top-[280%] origin-bottom right-0 min-w-[300px] bg-white rounded-2xl py-5 px-5 ${
                                toggle ? '' : 'hidden'
                            }`}
                        >
                            <li className="border">
                                <label
                                    htmlFor="search"
                                    className="flex items-center gap-3 bg-white px-2 xl:px-3 py-2 rounded-3xl xl:min-w-[280px]"
                                >
                                    <button className="w-6 h-6">
                                        <img src="./assets/search.PNG" alt="search" />
                                    </button>
                                    <input
                                        type="text"
                                        id="search"
                                        placeholder="Search by symbol or name"
                                        className="text-sm w-full outline-none focus:outline-none"
                                    />
                                </label>
                            </li>
                            <li className="mt-3 p-2 hover:bg-pink100 text-start">
                                <Link to="/farm">Farm</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="hidden xl:block py-1 px-2 hover:bg-[#cdcdcd6a] transition-all basis-full max-md:py-3 text-center">
                        <Link to="/farm">Farm</Link>
                    </li>
                    <li className="hidden xl:block py-1 px-2 hover:bg-[#cdcdcd6a] transition-all">
                        <label
                            htmlFor="search"
                            className="flex items-center gap-3 bg-white px-2 xl:px-3 py-2 rounded-3xl xl:min-w-[280px]"
                        >
                            <button className="w-6 h-6">
                                <img src="./assets/search.PNG" alt="search" />
                            </button>
                            <input
                                type="text"
                                id="search"
                                placeholder="Search by symbol or name"
                                className="text-sm w-full outline-none focus:outline-none"
                            />
                        </label>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button
                            className="bg-white font-medium rounded-3xl text-sm px-4 py-[7.2px] text-center inline-flex items-center"
                            type="button"
                            onClick={() => setShowList(!showList)}
                        >
                            <img
                                src="./assets/salena.PNG"
                                alt="salena"
                                height="27"
                                width="27"
                                className="lg:mr-3 mr-1"
                            />
                            <span className="mr-5 font-semibold hidden lg:block">Solana</span>
                            <svg
                                className={`w-4 h-4 ml-2 ${showList ? 'rotate-180' : ''}`}
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

                        {showList && (
                            <div className="z-10 absolute left-0 top-[115%] bg-white rounded-lg shadow min-w-[220px]">
                                <ul className="py-2 text-sm">
                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img
                                            src="./assets/salena.PNG"
                                            alt="salena"
                                            height="27"
                                            width="27"
                                        />
                                        <span className="font-semibold">Solana</span>
                                    </li>
                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img
                                            src="./assets/salena.PNG"
                                            alt="salena"
                                            height="27"
                                            width="27"
                                        />
                                        <span className="font-semibold">Solana</span>
                                    </li>
                                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img
                                            src="./assets/salena.PNG"
                                            alt="salena"
                                            height="27"
                                            width="27"
                                        />
                                        <span className="font-semibold">Solana</span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button type="button" className="h-[40px] w-[40px] rounded-full bg-white p-2">
                        <img src="./assets/night.PNG" alt="night" />
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-3 bg-white lg:px-5 px-2 py-2 rounded-full"
                        onClick={() => setConnectWallet(true)}
                    >
                        <img src="./assets/file.PNG" alt="file" height="30" width="30" />
                        <span className="text-sm font-semibold lg:block hidden">Wallet Connet</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
