import React from 'react';
import { c } from '../assets';
import FarmBtnList from '../components/farm/FarmBtnList';
import FarmCards from '../components/farm/FarmCards';
import Filter from '../components/farm/Filter';
import Pagination from '../components/farm/Pagination';
import TopFarmCards from '../components/farm/TopFarmCards';

export default function Farm() {
    return (
        <div className="bg-primary-100 dark:bg-dark500 pt-5 pb-14 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <TopFarmCards />
                <header>
                    <div className="flex items-center gap-2 mb-8">
                        <img src={c} alt="c" width="80" />
                        <h2 className="font-semibold sm:text-4xl text-3xl dark:text-white">Farm</h2>
                    </div>
                    <FarmBtnList />
                    <Filter />
                </header>
                <section>
                    <FarmCards />
                    <Pagination />
                </section>
            </section>
        </div>
    );
}
