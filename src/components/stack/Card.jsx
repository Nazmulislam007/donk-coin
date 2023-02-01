import React from 'react';

export default function Card() {
    return (
        <article className="hover:bg-[#cdcdcd6a] p-5 border border-gray-300 rounded-md w-full">
            <header className="flex items-center gap-2 justify-between mb-5">
                <div className="flex items-center gap-2">
                    <img src="./assets/bitcoin.PNG" alt="bitcoin" width="40" />
                    <span className="font-semibold">Bitcoin</span>
                </div>
                <div className="text-xs px-2 py-1 bg-[#cdcdcd6a] font-medium">
                    Earn USD Stablecoins
                </div>
            </header>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-xs text-pink900 mb-[2px]">Total Stacked (USD)</p>
                    <p className="font-semibold">$24,446,585</p>
                </div>
                <div>
                    <p className="text-xs text-pink900 mb-[2px]">Your Stake (USD)</p>
                    <p className="font-semibold">$0</p>
                </div>
                <div>
                    <p className="text-xs text-pink900 mb-[2px]">APR (30D)</p>
                    <p className="font-semibold">2.58%</p>
                </div>
                <div>
                    <p className="text-xs text-pink900 mb-[2px]">Deposit Fee</p>
                    <p className="font-semibold">1%</p>
                </div>
            </div>
        </article>
    );
}
