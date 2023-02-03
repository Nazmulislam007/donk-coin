import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

export default function RemoveLiquidity() {
    const [selectPercentage, setSelectPercentage] = useState(25);
    const [inputValue, setInputValue] = useState(false);

    return (
        <div>
            <p className="dark:text-dark900 text-xs text-pink900 pl-1 pt-4">Your Pool Tokens</p>
            <label
                htmlFor="minute"
                className="flex items-center gap-1 rounded-xl border dark:border-dark900 py-3 px-3 border-gray-300 my-3"
            >
                <input
                    type="number"
                    className="dark:text-darkText bg-transparent focus:bg-transparent outline-none flex-1 w-full"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter Amount"
                />
            </label>
            <div className="grid grid-cols-4 max-sm:grid-cols-3 gap-1 dark:text-darkText mb-4">
                {[25, 50, 75, 100].map((percentage) => (
                    <button
                        className={`p-2 ${
                            selectPercentage === percentage
                                ? 'bg-[#ff8945b4] text-white border-none'
                                : ''
                        } rounded-xl border border-gray-300 dark:border-dark900`}
                        onClick={() => setSelectPercentage(percentage)}
                        key={percentage}
                    >
                        {percentage}%
                    </button>
                ))}
            </div>
            <div className="p-4 border border-gray-300 dark:border-slate-700 rounded-xl mb-4 dark:text-darkText dark:bg-dark300">
                <div className="flex justify-between items-center mb-3">
                    <span>0</span>
                    <span>TERRA</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>0</span>
                    <span>ETHERIUM</span>
                </div>
            </div>
            <div className="p-4 border border-gray-300 dark:border-slate-700 rounded-xl mb-4 dark:text-darkText flex items-start justify-between gap-2">
                <span>Price</span>
                <div>
                    <div className="uppercase text-sm font-medium">1 Terra = 21.2908 etherium</div>
                    <div className="uppercase text-sm font-medium">
                        1 etherium = 0.0469687 Terra
                    </div>
                </div>
            </div>
            {inputValue && (
                <button
                    type="button"
                    className="bg-orange500 text-white w-full py-[14px] rounded-2xl custom-shadow hover:bg-[#ff8138] mb-4"
                >
                    Approve JLP
                    <span className="ml-4">
                        <ExpandMoreIcon />
                    </span>
                </button>
            )}
        </div>
    );
}
