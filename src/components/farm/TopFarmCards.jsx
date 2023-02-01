import React from 'react';
import TopFarmCard from './TopFarmCard';

export default function TopFarmCards() {
    return (
        <div className="mb-10">
            <p className="font-semibold dark:text-white">Top Farms</p>
            <div className="mt-3 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2">
                <TopFarmCard />
                <TopFarmCard />
                <TopFarmCard />
                <TopFarmCard />
            </div>
        </div>
    );
}
