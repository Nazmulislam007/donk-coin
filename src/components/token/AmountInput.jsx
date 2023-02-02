import React from 'react';
import { litecoin } from '../../assets';

export default function AmountInput() {
    return (
        <label
            htmlFor="minute"
            className="flex items-center gap-1 rounded-xl border dark:border-dark900 p-1 pl-4 border-gray-300 my-5"
        >
            <input
                type="number"
                className="dark:text-darkText bg-transparent focus:bg-transparent outline-none flex-1 w-full"
                placeholder="Enter Amount"
            />
            <button
                type="submit"
                className="fic gap-2 bg-white py-2 px-3 rounded-lg ml-1 dark:bg-dark300 dark:text-darkText"
            >
                <img src={litecoin} alt="litecoin" width={25} />
                <p className="font-semibold text-sm">Bitcoin</p>
            </button>
        </label>
    );
}
