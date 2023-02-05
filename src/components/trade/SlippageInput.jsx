import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import React, { useState } from 'react';

export default function SlippageInput() {
    const [selectPercentage, setSelectPercentage] = useState(0.1);
    const [inputVal, setInputVal] = useState('');

    const handleChange = (e) => {
        setInputVal(e.target.value);
    };

    return (
        <article className="px-4 py-2">
            <header className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-primary-contrast-100 dark:text-[#7d808b]">
                    Normal slippage tolerance (V1)
                </p>
                <span className="text-primary-contrast-100 dark:text-[#777777]">
                    <PrivacyTipOutlinedIcon fontSize="20px" />
                </span>
            </header>
            <div className="grid grid-cols-5 max-sm:grid-cols-3 gap-1 dark:text-darkText">
                {[0.1, 0.5, 1].map((percentage) => (
                    <button
                        className={`px-2 py-2 ${
                            selectPercentage === percentage
                                ? 'bg-accent-100 text-white border-none'
                                : ''
                        } rounded-xl border dark:border-dark900`}
                        onClick={() => {
                            setSelectPercentage(percentage);
                            setInputVal(percentage);
                        }}
                        key={percentage}
                    >
                        {percentage}%
                    </button>
                ))}
                <label
                    htmlFor="percent1"
                    className="col-span-2 flex items-center gap-1 rounded-xl border dark:border-dark900 px-2 py-2 max-sm:col-span-3"
                >
                    <input
                        type="number"
                        placeholder="0.5"
                        value={inputVal}
                        onChange={handleChange}
                        className="w-full bg-transparent focus:bg-transparent outline-none"
                    />
                    %
                </label>
            </div>
        </article>
    );
}
