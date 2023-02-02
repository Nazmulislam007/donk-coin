import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import React, { useState } from 'react';
import GraphSection from '../components/pool/GraphSection';
import PoolTable from '../components/pool/PoolTable';

export default function Pool() {
    const [showList, setShowList] = useState(false);

    return (
        <div className="bg-pink100 dark:bg-dark500 pt-2 pb-24 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <header className="flex items-center justify-between mb-5 gap-1">
                    <div>
                        <h2 className="font-semibold sm:text-4xl text-3xl mb-1 dark:text-white">
                            Pool
                        </h2>
                        <p className="text-sm font-medium text-pink900 dark:text-dark900">
                            Provide liquidity and earn fees
                        </p>
                    </div>
                    <div className="relative">
                        <button
                            className="bg-white dark:bg-dark700 dark:text-white font-medium rounded-3xl text-sm sm:px-5 px-3 sm:py-3 py-2 text-center inline-flex items-center"
                            type="button"
                            onClick={() => setShowList(!showList)}
                        >
                            <span className="sm:mr-5 font-semibold">All Pools</span>
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
                            <div className="z-10 absolute left-0 top-[115%] bg-white dark:bg-dark700 dark:text-white rounded-lg shadow w-full ">
                                <ul className="p-2 text-sm">
                                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark500 font-semibold cursor-pointer rounded-lg">
                                        V1 Pools
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark500 font-semibold cursor-pointer rounded-lg">
                                        V2 Pools
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>
                <div className="flex gap-10 max-md:flex-wrap">
                    <GraphSection />
                    <GraphSection />
                </div>
                <div className="flex md:gap-2">
                    <button className="flex items-center gap-2 py-2 sm:px-3 px-2 bg-white dark:bg-dark700 dark:text-white rounded-lg text-sm font-medium">
                        <CollectionsBookmarkOutlinedIcon />
                        V2 Pools
                    </button>
                    <button className="flex items-center dark:text-dark900 gap-2 py-2 sm:px-3 px-2 rounded-lg text-sm font-medium">
                        <StickyNote2OutlinedIcon />
                        All Pools
                    </button>
                    <button className="flex items-center gap-2 dark:text-dark900 py-2 sm:px-3 px-2 rounded-lg text-sm font-medium">
                        <StarBorderPurple500Icon />
                        My Pools
                    </button>
                </div>
                <div className="flex items-center gap-3 mt-3 mb-10 max-lg:flex-col-reverse">
                    <label
                        htmlFor="searchTable"
                        className="flex flex-1 items-center gap-2 p-2 border border-gray-300 rounded-md max-lg:w-full dark:text-white dark:border-dark900"
                    >
                        <SearchIcon />
                        <input
                            type="text"
                            id="searchTable"
                            placeholder="Search by symbol or name"
                            className="w-full outline-none focus:outline-none text-sm bg-transparent"
                        />
                    </label>
                    <button className="py-2 px-4 h-11 border-2 text-pink900 border-pink900 dark:border-dark900 dark:text-darkText rounded-md text-sm max-lg:w-full">
                        Create New Pool
                    </button>
                </div>
                <PoolTable />
            </section>
        </div>
    );
}
