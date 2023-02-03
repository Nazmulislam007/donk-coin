import React, { createContext, useContext, useMemo, useState } from 'react';

const ConnectWalletContext = createContext();

export const useConnectWallet = () => useContext(ConnectWalletContext);

export default function ConnectWalletProvider({ children }) {
    const [connectWallet, setConnectWallet] = useState(false);

    const connectWalletFn = (state) => {
        setConnectWallet(state);
    };

    const value = useMemo(() => ({ connectWalletFn, connectWallet }), [connectWallet]);

    return <ConnectWalletContext.Provider value={value}>{children}</ConnectWalletContext.Provider>;
}
