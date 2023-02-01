import React from 'react';
import ConnectWallet from '../components/home/ConnectWallet';
import Explore from '../components/home/Explore';
import Header from '../components/home/Header';
import TradTable from '../components/home/TradTable';

export default function Home({ setConnectWallet, connectWallet }) {
    return (
        <>
            <Header />
            <ConnectWallet setConnectWallet={setConnectWallet} connectWallet={connectWallet} />
            <Explore />
            <TradTable />
        </>
    );
}
