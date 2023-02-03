import React from 'react';

export default function DonkShare() {
    return (
        <section className="grid grid-cols-2 gap-3 mb-8">
            <div>
                <p className="text-[15px] font-medium text-pink900 mb-[2px] dark:text-dark900">
                    Your DONK share
                </p>
                <p className="font-semibold dark:text-darkText">0%</p>
            </div>
            <div>
                <p className="text-[15px] font-medium text-pink900 mb-[2px] dark:text-dark900">
                    Your Boost APR
                </p>
                <p className="font-semibold dark:text-darkText">0%</p>
            </div>
            <div>
                <p className="text-[15px] font-medium text-pink900 mb-[2px] dark:text-dark900">
                    Avg. Boost APR
                </p>
                <p className="font-semibold dark:text-darkText">2.58%</p>
            </div>
            <div>
                <p className="text-[15px] font-medium text-pink900 mb-[2px] dark:text-dark900">
                    Median Boost APR
                </p>
                <p className="font-semibold dark:text-darkText">1%</p>
            </div>
        </section>
    );
}
