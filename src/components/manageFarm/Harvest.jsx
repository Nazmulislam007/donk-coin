import React from 'react';
import { bitcoin, litecoin } from '../../assets';
import DonkShare from './DonkShare';
import Rewards from './Rewards';

export default function Harvest() {
    return (
        <section className="rounded-2xl bg-white dark:bg-dark300 basis-3/5 py-8 sm:px-10 px-5">
            <header>
                <div className="fic flex-wrap gap-[6px] font-semibold text-xl mb-5 dark:text-darkText">
                    <img src={bitcoin} alt="bitcoin" width={40} />
                    <p className="uppercase">bitcoin</p>
                    <span>/</span>
                    <img src={litecoin} alt="litecoin" width={40} />
                    <p className="uppercase">litecoin</p>
                </div>
                <div className="mb-4 flex justify-between py-4 gap-3 flex-wrap">
                    <div>
                        <p className="font-medium text-pink900 mb-[1px] text-[15px] dark:text-dark900">
                            Liquidity
                        </p>
                        <div className="dark:text-darkText font-medium text-[15px]">
                            $120,863,779
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-pink900 mb-[1px] text-[15px] dark:text-dark900">
                            Pool APR
                        </p>
                        <div className="dark:text-darkText font-medium text-[15px]">35.5%</div>
                    </div>
                    <div>
                        <p className="font-medium text-pink900 mb-[1px] text-[15px] dark:text-dark900">
                            DONK APR
                        </p>
                        <div className="dark:text-darkText font-medium text-[15px]">2.43%</div>
                    </div>
                </div>
            </header>
            <DonkShare />
            <section className="flex md:items-center gap-3 max-md:flex-col">
                <div className="flex-1">
                    <div className="mb-3 dark:text-darkText">
                        <p className="text-pink900 font-medium mb-1 dark:text-dark900">Staked</p>
                        <p className="font-medium mb-1 text-2xl">0</p>
                        <p className="mb-1">$0</p>
                    </div>
                    <div>
                        <p className="text-pink900 font-medium mb-1 dark:text-dark900">
                            Your share
                        </p>
                        <p className="font-medium mb-1 text-2xl dark:text-darkText">0%</p>
                    </div>
                </div>
                <Rewards />
            </section>
        </section>
    );
}
