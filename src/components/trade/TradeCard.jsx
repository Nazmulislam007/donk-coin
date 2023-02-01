import React from 'react';

export default function TradeCard() {
    return (
        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 dark:hover:bg-darkHover rounded-xl cursor-pointer">
            <img src="./assets/logo.PNG" alt="logo" width="60" />
            <header className="mt-2">
                <div className="flex items-center mb-2">
                    <h4 className="font-semibold mr-3 leading-[10px] dark:text-white">DONK COIN</h4>
                    <span className="text-sm font-semibold text-gray-400 leading-[10px]">
                        Solana
                    </span>
                </div>
                <ul className="flex items-center gap-2 sm:text-sm text-xs font-medium text-gray-400">
                    <li>Donk Coin</li>
                    <li>|</li>
                    <li>Top Tokens</li>
                    <li>|</li>
                    <li>Large Caps</li>
                </ul>
            </header>
        </div>
    );
}
