import React, { useState } from 'react';
import { etherium, terra } from '../../assets';
import ConnectWalletBtn from '../../layout/ConnectWalletBtn';
import AddLiquidity from './AddLiquidity';
import RemoveLiquidity from './RemoveLiquidity';

export default function AddRemoveLiquidity() {
    const [activeBtn, setActiveBtn] = useState('Add Liquidity');

    return (
        <section className="flex-1">
            <ul className="flex items-center gap-1 font-medium px-1 py-1 rounded-2xl border border-pink900 text-pink900 w-full dark:text-dark900 dark:border-dark900">
                {['Add Liquidity', 'Remove Liquidity'].map((currency) => (
                    <li key={currency} className="w-full">
                        <button
                            type="button"
                            className={`py-2.5 px-2 rounded-xl w-full ${
                                activeBtn === currency
                                    ? 'bg-[#ff8945b4] dark:bg-darkHover text-white'
                                    : ''
                            }`}
                            onClick={() => setActiveBtn(currency)}
                        >
                            {currency}
                        </button>
                    </li>
                ))}
            </ul>
            {activeBtn === 'Add Liquidity' ? <AddLiquidity /> : <RemoveLiquidity />}
            <ConnectWalletBtn />
            <div className="mt-12 py-10 sm:px-8 px-4 bg-white dark:bg-dark300 dark:text-darkText rounded-2xl font-semibold text-sm">
                <p className="mb-4 ml-1 text-[17px]">Deposit Balance</p>
                <div className="fic gap-2 mb-2">
                    <img src={etherium} alt="bitcoin" width={40} />
                    <p>Etherium</p>
                    <p className="ml-auto">0</p>
                </div>
                <div className="fic gap-2">
                    <img src={terra} alt="litecoin" width={40} />
                    <p>Terra</p>
                    <p className="ml-auto">0</p>
                </div>
            </div>
        </section>
    );
}
