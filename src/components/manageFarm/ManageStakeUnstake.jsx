import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectBtn from '../token/ConnectBtn';

export default function ManageStakeUnstake() {
    const [stakeUnStake, setStakeUnStake] = useState('Stake');

    return (
        <section className="rounded-2xl bg-white dark:bg-dark300 flex-1">
            <div className="fic font-semibold border-b border-gray-300 dark:text-darkText">
                <button
                    type="button"
                    className={`${
                        stakeUnStake === 'Stake' ? 'border-black dark:border-darkText' : ''
                    } text-center flex-1 pb-3 pt-5 border-b-2`}
                    onClick={() => setStakeUnStake('Stake')}
                >
                    Stake
                </button>
                <button
                    type="button"
                    className={`${
                        stakeUnStake === 'Unstake' ? 'border-black dark:border-darkText' : ''
                    } text-center flex-1 pb-3 pt-5 border-b-2`}
                    onClick={() => setStakeUnStake('Unstake')}
                >
                    Unstake
                </button>
            </div>
            <div className="px-6 py-4 flex justify-between flex-col h-[87%]">
                <div>
                    <label
                        htmlFor="minute"
                        className="flex items-center gap-1 rounded-xl border dark:border-dark900 p-1 pl-4 border-gray-300 my-3"
                    >
                        <input
                            type="number"
                            className="dark:text-darkText bg-transparent focus:bg-transparent outline-none flex-1 w-full"
                            placeholder="Enter Amount"
                        />
                        <button
                            type="submit"
                            className="bg-white py-2 px-3 rounded-lg w-max dark:bg-dark300 dark:text-darkText"
                        >
                            <p className="font-semibold text-xs">Bitcoin - Litecoin</p>
                        </button>
                    </label>
                    <div className="fic justify-between gap-3 px-1 my-1">
                        <p className="text-sm font-medium dark:text-darkText">LP Token Balance</p>
                        <p className="dark:text-darkText">0</p>
                    </div>
                    <div className="fic justify-between px-1 mt-5">
                        <Link to="/" className="font-medium dark:text-darkText hover:underline">
                            Get LP Token <ArrowForwardIcon style={{ fontSize: '15px' }} />
                        </Link>
                        <button
                            type="button"
                            className="flex items-center p-2 rounded-full gap-2 font-medium dark:text-white w-max"
                        >
                            <SettingsIcon />
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <ConnectBtn />
                </div>
            </div>
        </section>
    );
}
