import React from 'react';
import Explore from '../components/home/Explore';
import Header from '../components/home/Header';
import TradTable from '../components/home/TradTable';

export default function Home() {
    return (
        <div className="dark:bg-dark500">
            <Header />
            <Explore />
            <TradTable />
        </div>
    );
}
