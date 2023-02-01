import React from 'react';
import SwipBox from '../components/trade/SwipBox';
import SwipResult from '../components/trade/SwipResult';

export default function Trade() {
    return (
        <div className="bg-pink100 dark:bg-dark500 py-8 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto flex gap-5 max-lg:flex-col">
                <SwipResult />
                <SwipBox />
            </section>
        </div>
    );
}
