import React from 'react';
import { useConnectWallet } from '../../context/ConnectWalletProvider';

export default function ConnectBtn() {
    const { connectWalletFn } = useConnectWallet();
    return (
        <button
            type="button"
            onClick={() => connectWalletFn(true)}
            className="bg-orange500 text-white w-full py-[14px] rounded-2xl custom-shadow"
        >
            Connect Wallet
        </button>
    );
}
