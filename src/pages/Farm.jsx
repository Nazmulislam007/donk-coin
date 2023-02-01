import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import FarmCards from '../components/farm/FarmCards';
import TopFarmCards from '../components/farm/TopFarmCards';

export default function Farm() {
    return (
        <div className="bg-pink100 dark:bg-dark500 pt-5 pb-14 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <TopFarmCards />
                <header>
                    <div className="flex items-center gap-2 mb-8">
                        <img src="./assets/c.PNG" alt="c" width="80" />
                        <h2 className="font-semibold sm:text-4xl text-3xl dark:text-white">Farm</h2>
                    </div>
                    <div className="flex md:gap-2">
                        <button className="py-2 px-3 bg-white dark:bg-dark300 dark:text-darkText rounded-lg text-sm font-medium">
                            All
                        </button>
                        <button className="py-2 px-3 rounded-lg text-sm font-medium dark:text-darkText">
                            Top farm
                        </button>
                        <button className="py-2 px-3 rounded-lg text-sm font-medium dark:text-darkText">
                            Boost
                        </button>
                        <button className="py-2 px-3 rounded-lg text-sm font-medium dark:text-darkText">
                            My farm
                        </button>
                    </div>
                    <div className="flex items-center justify-between gap-5 mt-8 mb-10 max-lg:flex-col">
                        <label
                            htmlFor="cardsearch"
                            className="flex lg:max-w-sm flex-1 items-center gap-2 p-2 border border-gray-300 rounded-md max-lg:w-full dark:text-darkText dark:border-dark900"
                        >
                            <SearchIcon />
                            <input
                                type="text"
                                id="cardsearch"
                                placeholder="Search by symbol or name"
                                className="w-full outline-none focus:outline-none text-sm bg-transparent"
                            />
                        </label>
                        <div className="text-sm flex items-center gap-2 max-lg:mr-auto dark:text-darkText">
                            <span>Sort by:</span>
                            <button className="font-medium">Liquidity</button>
                            <span> | </span>
                            <button className="font-medium">APR</button>
                        </div>
                    </div>
                </header>
                <section>
                    <FarmCards />
                    <div className="flex justify-center md:gap-2 text-sm font-medium ">
                        <button className="w-10 h-10 hover:bg-white rounded-full text-gray-400 dark:hover:bg-dark300 dark:text-darkText">
                            <ChevronLeftIcon />
                        </button>
                        <button className="w-10 h-10 hover:bg-white bg-white dark:bg-dark300 dark:text-darkText rounded-full">
                            1
                        </button>
                        <button className="w-10 h-10 hover:bg-white dark:hover:bg-dark300 dark:text-darkText rounded-full">
                            2
                        </button>
                        <button className="w-10 h-10 hover:bg-white dark:hover:bg-dark300 dark:text-darkText rounded-full">
                            3
                        </button>
                        <button className="w-10 h-10 hover:bg-white dark:hover:bg-dark300 dark:text-darkText rounded-full">
                            4
                        </button>
                        <button className="w-10 h-10 hover:bg-white dark:hover:bg-dark300 dark:text-darkText rounded-full rotate-180">
                            <ChevronLeftIcon />
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
}
