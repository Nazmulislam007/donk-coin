import React from 'react';
import { bitcoin, litecoin } from '../../assets';
import AmountInput from './AmountInput';
import ConnectBtn from './ConnectBtn';

export default function StakeUnStake() {
    return (
        <section>
            <div className="fic font-semibold border-b border-gray-300 dark:text-darkText">
                <button
                    type="button"
                    className="text-center flex-1 pb-2.5 border-b-2 border-black dark:border-darkText"
                >
                    Stake
                </button>
                <button type="button" className="text-center flex-1 pb-2.5">
                    Unstake
                </button>
            </div>
            <div className="sm:px-8 px-4">
                <AmountInput />
                <ConnectBtn />
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-8 mt-12 py-10 sm:px-8 px-4 bg-white dark:bg-dark300 dark:text-darkText rounded-2xl">
                <div className="font-semibold col-span-2 sm:col-span-1">
                    <p className="mb-1">Staked Balance</p>
                    <div className="fic gap-2">
                        <img src={bitcoin} alt="bitcoin" width={40} />
                        <p>0 Bitcoin</p>
                    </div>
                </div>
                <div className="font-semibold col-span-2 sm:col-span-1">
                    <p className="mb-1">Pending Rewards</p>
                    <div className="fic gap-2">
                        <img src={litecoin} alt="litecoin" width={40} />
                        <p>0 Litecoin</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <ConnectBtn />
                </div>
            </div>
        </section>
    );
}
