import React from 'react';
import { logo } from '../../assets';

export default function TradeCard() {
    return (
        <div className="flex items-center gap-2 py-2 px-[6px] hover:bg-pink100 dark:hover:bg-darkHover rounded-xl cursor-pointer">
            <img src={logo} alt="logo" width="60" />
            <header className="mt-2">
                <div className="flex items-center mb-2">
                    <h4 className="font-semibold mr-3 leading-[10px] dark:text-white">DONK COIN</h4>
                    <span className="text-sm text-gray-400 leading-[10px]">Solana</span>
                </div>
                <ul className="flex items-center gap-2 sm:text-sm text-xs text-gray-400 ">
                    <li className="hover:dark:text-darkText hover:underline hover:text-black">
                        Donk Coin
                    </li>
                    <li>|</li>
                    <li className="hover:dark:text-darkText hover:underline hover:text-black">
                        Top Tokens
                    </li>
                    <li>|</li>
                    <li className="hover:dark:text-darkText hover:underline hover:text-black">
                        Large Caps
                    </li>
                </ul>
            </header>
        </div>
    );
}
