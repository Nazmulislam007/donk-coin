/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import AmountInput from '../../layout/AmountInput';
import ConnectWalletBtn from '../../layout/Connectwallet/ConnectWalletBtn';

export default function CreatePool() {
    const [showHide, setShowHide] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setShowHide(true)}
                className="py-2 px-4 h-11 border-2 text-primary-contrast-100 border-primary-contrast-100 dark:border-dark900 dark:text-darkText rounded-md text-sm max-lg:w-full hover:bg-primary-hover-100 dark:hover:bg-darkHover"
            >
                Create New Pool
            </button>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] dark:bg-[#0000005d] backdrop-blur-sm z-[97] ${
                    showHide ? 'fixed' : 'hidden'
                }`}
                onClick={() => setShowHide(false)}
            />
            <div
                className={`${
                    showHide ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-[95%] max-w-[480px] z-[98] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-dark300 py-8 rounded-3xl`}
            >
                <div className="sm:px-8 px-4">
                    <p className="text-xl font-semibold dark:text-darkText">Add Liquidity</p>
                    <AmountInput />
                    <AmountInput />
                    <ConnectWalletBtn removeCreatePool={setShowHide} />
                </div>
            </div>
        </>
    );
}
