import React from 'react';
import { useDispatch } from 'react-redux';
import { showConnectWallet } from '../../feature/wallet/walletSlice';

export default function ConnectWalletBtn() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(showConnectWallet(true));
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="bg-accent-400 text-white w-full py-[14px] rounded-2xl custom-shadow hover:bg-accent-hover-400"
        >
            Connect Wallet
        </button>
    );
}
