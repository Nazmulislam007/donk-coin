import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import FarmCards from '../components/farm/FarmCards';

export default function Farm() {
    return (
        <div className="bg-pink100 pt-5 pb-14 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <div className="mb-10">
                    <p className="font-semibold">Top Farms</p>
                    <div className="mt-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
                        <article className="bg-white hover:shadow-lg p-3 rounded-md">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-1">
                                    <img src="./assets/terra.PNG" alt="terra" width="15" />
                                    <img src="./assets/bitcoin.PNG" alt="bitcoin" width="15" />
                                    <span className="font-semibold text-[11px] leading-4">
                                        TERRA-BITCOIN
                                    </span>
                                </div>
                                <div className="text-[10px] flex items-center gap-1">
                                    <span>APR (30D)</span>
                                    <span>2.58%</span>
                                    <img src="./assets/c.PNG" alt="terra" width="15" />
                                </div>
                            </div>
                        </article>
                        <article className="bg-white hover:shadow-lg p-3 rounded-md">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-1">
                                    <img src="./assets/terra.PNG" alt="terra" width="15" />
                                    <img src="./assets/bitcoin.PNG" alt="bitcoin" width="15" />
                                    <span className="font-semibold text-[11px] leading-4">
                                        TERRA-BITCOIN
                                    </span>
                                </div>
                                <div className="text-[10px] flex items-center gap-1">
                                    <span>APR (30D)</span>
                                    <span>2.58%</span>
                                    <img src="./assets/c.PNG" alt="terra" width="15" />
                                </div>
                            </div>
                        </article>
                        <article className="bg-white hover:shadow-lg p-3 rounded-md">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-1">
                                    <img src="./assets/terra.PNG" alt="terra" width="15" />
                                    <img src="./assets/bitcoin.PNG" alt="bitcoin" width="15" />
                                    <span className="font-semibold text-[11px] leading-4">
                                        TERRA-BITCOIN
                                    </span>
                                </div>
                                <div className="text-[10px] flex items-center gap-1">
                                    <span>APR (30D)</span>
                                    <span>2.58%</span>
                                    <img src="./assets/c.PNG" alt="terra" width="15" />
                                </div>
                            </div>
                        </article>
                        <article className="bg-white hover:shadow-lg p-3 rounded-md">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-1">
                                    <img src="./assets/terra.PNG" alt="terra" width="15" />
                                    <img src="./assets/bitcoin.PNG" alt="bitcoin" width="15" />
                                    <span className="font-semibold text-[11px] leading-4">
                                        TERRA-BITCOIN
                                    </span>
                                </div>
                                <div className="text-[10px] flex items-center gap-1">
                                    <span>APR (30D)</span>
                                    <span>2.58%</span>
                                    <img src="./assets/c.PNG" alt="terra" width="15" />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <header>
                    <div className="flex items-center gap-2 mb-8">
                        <img src="./assets/c.PNG" alt="c" width="80" />
                        <h2 className="font-semibold sm:text-4xl text-3xl">Farm</h2>
                    </div>
                    <div className="flex md:gap-2">
                        <button className="py-2 px-3 bg-white rounded-lg text-sm font-medium">
                            All
                        </button>
                        <button className="py-2 px-3 rounded-lg text-sm font-medium">
                            Top farm
                        </button>
                        <button className="py-2 px-3 rounded-lg text-sm font-medium">Boost</button>
                        <button className="py-2 px-3 rounded-lg text-sm font-medium">
                            My farm
                        </button>
                    </div>
                    <div className="flex items-center justify-between gap-5 mt-8 mb-10 max-lg:flex-col">
                        <label
                            htmlFor="search"
                            className="flex lg:max-w-sm flex-1 items-center gap-2 p-2 border border-gray-300 rounded-md max-lg:w-full"
                        >
                            <span>
                                <img src="./assets/search.PNG" alt="search" width="30" />
                            </span>
                            <input
                                type="text"
                                id="search"
                                placeholder="Search by symbol or name"
                                className="w-full outline-none focus:outline-none text-sm bg-transparent"
                            />
                        </label>
                        <div className="text-sm flex items-center gap-2 max-lg:mr-auto">
                            <span>Sort by:</span>
                            <button className="font-medium">Liquidity</button>
                            <span> | </span>
                            <button className="font-medium">APR</button>
                        </div>
                    </div>
                </header>
                <section>
                    <FarmCards />
                    <div className="flex justify-center md:gap-2 text-sm font-medium">
                        <button className="w-10 h-10 hover:bg-white rounded-full text-gray-400">
                            <ChevronLeftIcon />
                        </button>
                        <button className="w-10 h-10 hover:bg-white bg-white rounded-full">
                            1
                        </button>
                        <button className="w-10 h-10 hover:bg-white rounded-full">2</button>
                        <button className="w-10 h-10 hover:bg-white rounded-full">3</button>
                        <button className="w-10 h-10 hover:bg-white rounded-full">4</button>
                        <button className="w-10 h-10 hover:bg-white rounded-full rotate-180">
                            <ChevronLeftIcon />
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
}
