import React from 'react';
import { useConnectWallet } from '../context/ConnectWalletProvider';

export default function ConnectWalletBtn({ removeCreatePool }) {
    const { connectWalletFn } = useConnectWallet();

    const handleClick = () => {
        connectWalletFn(true);
        removeCreatePool(false);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="bg-orange500 text-white w-full py-[14px] rounded-2xl custom-shadow hover:bg-[#ff8138]"
        >
            Connect Wallet
        </button>
    );
}
