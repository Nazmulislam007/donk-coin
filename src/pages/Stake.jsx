import React, { useState } from 'react';
import Cards from '../components/stake/Cards';
import GraphSection from '../components/stake/GraphSection';

export default function Stake() {
    const [activeBtn, setActiveBtn] = useState('USD');

    return (
        <div className="bg-primary-100 dark:bg-dark500 pt-5 pb-14 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto">
                <header className="flex items-center justify-between mb-5 gap-1">
                    <div>
                        <h2 className="font-semibold sm:text-4xl text-3xl mb-1 dark:text-white">
                            Stake
                        </h2>
                        <p className="text-sm font-medium text-primary-contrast-100 dark:text-dark900">
                            Stake your DONK tokens and earn more.
                        </p>
                    </div>
                    <ul className="flex items-center gap-1 font-medium px-1 py-1 rounded-md border border-primary-contrast-100 text-primary-contrast-100 w-fit dark:text-dark900 dark:border-dark900">
                        {['USD', 'DONK'].map((currency) => (
                            <li key={currency}>
                                <button
                                    type="button"
                                    className={`py-1 px-2 hover:bg-primary-contrast-100 dark:hover:bg-darkHover hover:text-white rounded-md ${
                                        activeBtn === currency
                                            ? 'bg-primary-contrast-100 dark:bg-darkHover text-white'
                                            : ''
                                    }`}
                                    onClick={() => setActiveBtn(currency)}
                                >
                                    {currency}
                                </button>
                            </li>
                        ))}
                    </ul>
                </header>
                <GraphSection />
                <Cards />
            </section>
        </div>
    );
}
