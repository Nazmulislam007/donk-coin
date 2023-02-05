import React from 'react';
import GraphSection from '../components/pool/GraphSection';
import PoolDropDown from '../components/pool/PoolDropDown';
import PoolListBtns from '../components/pool/PoolListBtns';
import PoolTable from '../components/pool/PoolTable';
import SearchPool from '../components/pool/SearchPool';

export default function Pool() {
    return (
        <div className="bg-primary-100 dark:bg-dark500 pt-2 pb-24 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <header className="flex items-center justify-between mb-5 gap-1">
                    <div>
                        <h2 className="font-semibold sm:text-4xl text-3xl mb-1 dark:text-white">
                            Pool
                        </h2>
                        <p className="text-sm font-medium text-primary-contrast-100 dark:text-dark900">
                            Provide liquidity and earn fees
                        </p>
                    </div>
                    <PoolDropDown />
                </header>
                <div className="flex gap-10 max-md:flex-wrap">
                    <GraphSection />
                    <GraphSection />
                </div>
                <PoolListBtns />
                <SearchPool />
                <PoolTable />
            </section>
        </div>
    );
}
