import React from 'react';
import Graph from './Graph';

export default function GraphSection() {
    return (
        <section>
            <header
                className="flex items-center justify-between gap-2 flex-wrap
            "
            >
                <div>
                    <p className="font-semibold text-sm text-pink900 mb-1  dark:text-dark900">
                        TVL (Total Value Locked)
                    </p>
                    <p className="text-2xl font-semibold  dark:text-white">$86,029,43</p>
                </div>
                <ul className="flex items-center font-medium px-1 py-1 rounded-md border border-pink900 text-pink900 w-fit dark:text-dark900 dark:border-dark900">
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-dark700 hover:text-white rounded-md cursor-pointer">
                        5m
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-dark700 hover:text-white rounded-md cursor-pointer">
                        15m
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-dark700 hover:text-white rounded-md cursor-pointer">
                        1H
                    </li>
                    <li className="py-1 px-2 hover:bg-pink900 dark:hover:bg-dark700 hover:text-white rounded-md cursor-pointer">
                        4H
                    </li>
                </ul>
            </header>
            <Graph />
        </section>
    );
}
