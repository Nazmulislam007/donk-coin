import React, { createContext, useContext, useMemo, useState } from 'react';

const StaticStatesContext = createContext();

export const useStaticStates = () => useContext(StaticStatesContext);

export default function StaticStatesProvider({ children }) {
    const [connectWallet, setConnectWallet] = useState(false);
    const [showSelectTokens, setShowSelectTokens] = useState('');

    const connectWalletFn = (state) => {
        setConnectWallet(state);
    };

    const showSelectTokensFn = (state) => {
        setShowSelectTokens(state);
    };

    const value = useMemo(
        () => ({ connectWalletFn, connectWallet, showSelectTokensFn, showSelectTokens }),
        [connectWallet, showSelectTokens]
    );

    return <StaticStatesContext.Provider value={value}>{children}</StaticStatesContext.Provider>;
}
