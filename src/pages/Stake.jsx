import React from 'react';
import Cards from '../components/stack/Cards';
import GraphSection from '../components/stack/GraphSection';

export default function Stake() {
    return (
        <div className="bg-pink100 pt-5 pb-14 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <header className="flex items-center justify-between mb-5 gap-1">
                    <div>
                        <h2 className="font-semibold sm:text-4xl text-3xl mb-1">Stake</h2>
                        <p className="text-sm font-medium text-pink900">
                            Stake your JOE tokens and earn more.
                        </p>
                    </div>
                    <ul className="flex items-center font-medium px-1 py-1 rounded-md border border-pink900 text-pink900 w-fit">
                        <li className="py-1 px-2 bg-pink900 text-white rounded-md cursor-pointer">
                            USD
                        </li>
                        <li className="py-1 px-2 rounded-md cursor-pointer">JOE</li>
                    </ul>
                </header>
                <div className="flex gap-10 max-md:flex-wrap">
                    <GraphSection />
                </div>
                <Cards />
            </section>
        </div>
    );
}
