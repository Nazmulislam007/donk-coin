import React from 'react';
import { Link } from 'react-router-dom';
import { etherium, terra } from '../../assets';

export default function FarmCard() {
    return (
        <Link
            to="/farm/manage"
            className="bg-white dark:bg-dark300 hover:shadow-lg dark:shadow-black p-5 rounded-md w-full"
        >
            <header className="flex items-center gap-2 justify-between mb-5">
                <div className="flex items-center gap-1">
                    <img src={terra} alt="terra" className="w-8 sm:w-10" />
                    <img src={etherium} alt="etherium" className="w-8 sm:w-10" />
                    <span className="font-semibold max-sm:text-sm dark:text-darkText">
                        TERRA-ETHERIUM
                    </span>
                </div>
                <div className="text-xs px-2 py-1 bg-primary-hover-100 dark:bg-darkHover font-medium dark:text-darkText">
                    BOOST
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
                    <p className="text-xs text-pink900 mb-[2px] dark:text-dark900">Deposit Fee</p>
                    <p className="font-semibold dark:text-darkText">1%</p>
                </div>
            </div>
        </Link>
    );
}
