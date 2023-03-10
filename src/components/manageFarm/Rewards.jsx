import React from 'react';
import { logo } from '../../assets';

export default function Rewards() {
    return (
        <div className="basis-3/5 bg-[#ff894596] p-5 rounded-2xl">
            <div>
                <p className="text-gray-600 font-medium mb-1 dark:text-darkText">Pending Rewards</p>
                <div className="font-medium mb-1 text-xl fic gap-1 text-white">
                    <img src={logo} alt="b" className="w-10 h-10 bg-white rounded-full" />
                    <span>0</span>
                    <span>DONK</span>
                </div>
                <p className="text-gray-600 dark:text-darkText">$0.00</p>
            </div>
            <button className="bg-accent-400 text-white w-full py-[14px] rounded-2xl custom-shadow font-semibold mt-8 hover:bg-accent-hover-400">
                Harvast
            </button>
        </div>
    );
}
