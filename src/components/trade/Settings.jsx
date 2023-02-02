/* eslint-disable jsx-a11y/control-has-associated-label */
import ClearIcon from '@mui/icons-material/Clear';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import React, { useState } from 'react';

export default function Settings() {
    const [showHide, setShowHide] = useState(false);
    const [checked, setChecked] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                className="flex items-center py-2.5 px-5 bg-orange500 rounded-full gap-2 font-medium text-white ml-auto"
                onClick={() => setShowHide(!showHide)}
            >
                <img src="./assets/settings.svg" alt="setting-icon" />
                Settings
            </button>
            <form
                className={`${
                    !showHide
                        ? 'invisible scale-0 opacity-0'
                        : 'visible scale-100 opacity-100 origin-top-right'
                } absolute bg-white dark:bg-dark300 z-20 border dark:border-dark900 max-w-[400px] right-0 rounded-2xl mt-1`}
            >
                <div className="flex justify-between items-center border-b px-4 py-2 dark:border-dark900">
                    <p className="dark:text-darkText">Setting</p>
                    <button
                        type="button"
                        onClick={() => setShowHide(false)}
                        className="py-[2px] px-[3px] hover:bg-pink100 dark:text-darkText dark:hover:bg-darkHover"
                    >
                        <ClearIcon style={{ fontSize: '20px' }} />
                    </button>
                </div>
                <article className="px-4 py-2">
                    <header className="flex items-center justify-between mb-1">
                        <p className="text-xs font-medium text-pink900 dark:text-[#7d808b]">
                            Normal slippage tolerance (V1)
                        </p>
                        <span className="text-pink900 dark:text-[#777777]">
                            <PrivacyTipOutlinedIcon fontSize="20px" />
                        </span>
                    </header>
                    <div className="grid grid-cols-5 gap-1 dark:text-darkText">
                        <button className="px-2 py-2 rounded-xl border dark:border-dark900">
                            0.1%
                        </button>
                        <button className="px-2 py-2 rounded-xl border dark:border-dark900">
                            0.5%
                        </button>
                        <button className="px-2 py-2 rounded-xl border dark:border-dark900">
                            1%
                        </button>
                        <label
                            htmlFor="percent1"
                            className="col-span-2 flex items-center gap-1 rounded-xl border dark:border-dark900 px-2 py-2"
                        >
                            <input
                                type="number"
                                placeholder="0.5"
                                className="w-full bg-transparent focus:bg-transparent outline-none"
                            />
                            %
                        </label>
                    </div>
                </article>
                <article className="px-4 pb-3">
                    <header className="flex items-center justify-between mb-1">
                        <p className="text-xs font-medium text-pink900 dark:text-[#7d808b]">
                            Normal slippage tolerance (V1)
                        </p>
                        <span className="text-pink900 dark:text-[#777777]">
                            <PrivacyTipOutlinedIcon fontSize="20px" />
                        </span>
                    </header>
                    <div className="grid grid-cols-5 gap-1 dark:text-darkText">
                        <button className="px-2 py-2 rounded-xl border dark:border-dark900">
                            0.1%
                        </button>
                        <button className="px-2 py-2 rounded-xl border dark:border-dark900">
                            0.5%
                        </button>
                        <button className="px-2 py-2 rounded-xl border dark:border-dark900">
                            1%
                        </button>
                        <label
                            htmlFor="percent2"
                            className="col-span-2 flex items-center gap-1 rounded-xl border dark:border-dark900 px-2 py-2"
                        >
                            <input
                                type="number"
                                defaultValue={0.1}
                                className="w-full bg-transparent focus:bg-transparent outline-none"
                            />
                            %
                        </label>
                    </div>
                </article>
                <div className="px-4 pb-2">
                    <div className="dark:text-[#7d808b] text-xs mb-1">Transaction Deadline</div>
                    <label
                        htmlFor="minute"
                        className="flex items-center gap-1 rounded-xl border dark:border-dark900 px-2 py-2 w-min"
                    >
                        <input
                            type="number"
                            className="dark:text-darkText bg-transparent focus:bg-transparent outline-none"
                        />
                        <span className="dark:text-darkText">minutes</span>
                    </label>
                </div>
                <div className="px-4 pt-2 pb-4">
                    <p className="text-xs dark:text-[#7d808b]">Safe Mode</p>
                    <div className="flex items-center gap-2 mt-1">
                        <label
                            htmlFor="toggle"
                            className="relative inline-flex items-center cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                value=""
                                checked={checked}
                                readOnly
                                className="sr-only peer"
                            />
                            <button
                                type="button"
                                onClick={() => setChecked(!checked)}
                                className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-orange500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange500"
                            />
                        </label>
                        <p className="text-xs dark:text-[#7d808b]">
                            Prevent high price impact trades. Disable at your own risk.{' '}
                            <a href="/" className="text-orange500 hover:underline">
                                Learn more.
                            </a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
