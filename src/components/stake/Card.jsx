import React from 'react';
import { Link } from 'react-router-dom';
import { bitcoin } from '../../assets';

export default function Card() {
    return (
        <Link
            to="/stake/token"
            className="hover:bg-primary-hover-100 dark:hover:bg-[#00000024] p-5 border border-gray-300 dark:border-dark900 rounded-md w-full"
        >
            <header className="flex items-center gap-2 justify-between mb-5">
                <div className="flex items-center gap-2">
                    <img src={bitcoin} alt="bitcoin" width="40" />
                    <span className="font-semibold dark:text-darkText">Bitcoin</span>
                </div>
                <div className="text-xs px-2 py-1 bg-primary-hover-100 dark:bg-darkHover font-medium dark:text-darkText rounded-md">
                    Earn USD Stablecoins
                </div>
            </header>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-xs text-primary-contrast-100 mb-[2px] dark:text-dark900">
                        Total Stacked (USD)
                    </p>
                    <p className="font-semibold dark:text-darkText">$24,446,585</p>
                </div>
                <div>
                    <p className="text-xs text-primary-contrast-100 mb-[2px] dark:text-dark900">
                        Your Stake (USD)
                    </p>
                    <p className="font-semibold dark:text-darkText">$0</p>
                </div>
                <div>
                    <p className="text-xs text-primary-contrast-100 mb-[2px] dark:text-dark900">
                        APR (30D)
                    </p>
                    <p className="font-semibold dark:text-darkText">2.58%</p>
                </div>
                <div>
                    <p className="text-xs text-primary-contrast-100 mb-[2px] dark:text-dark900">
                        Deposit Fee
                    </p>
                    <p className="font-semibold dark:text-darkText">1%</p>
                </div>
            </div>
        </Link>
    );
}
