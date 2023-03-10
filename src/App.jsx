import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes, useLocation } from 'react-router-dom';
import ConnectWallet from './layout/Connectwallet/ConnectWallet';
import Footer from './layout/Footer';
import Nav from './layout/navbar/Nav';
import SelectTokens from './layout/SelectTokens';
import Farm from './pages/Farm';
import Home from './pages/Home';
import LPtoken from './pages/LPtoken';
import ManageFarm from './pages/ManageFarm';
import NFTs from './pages/NFTs';
import Pool from './pages/Pool';
import Stake from './pages/Stake';
import Token from './pages/Token';
import Trade from './pages/Trade';

const Wrapper = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function App() {
    // const coinsFinance = [
    //     {
    //         img: './assets/a.PNG',
    //         des: 'Trade Tokens',
    //     },
    //     {
    //         img: './assets/b.PNG',
    //         des: 'Provide Liquidity',
    //     },
    //     {
    //         img: './assets/c.PNG',
    //         des: 'Farm',
    //     },
    //     {
    //         img: './assets/d.PNG',
    //         des: 'Stake',
    //     },
    //     {
    //         img: './assets/e.PNG',
    //         des: 'Trade NFTs',
    //     },
    //     {
    //         img: './assets/c.PNG',
    //         des: 'Trade Tokens',
    //     },
    // ];

    return (
        <div>
            <Wrapper>
                <Nav />
                <ConnectWallet />
                <SelectTokens />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/pool" element={<Pool />} />
                    <Route path="/pool/lp-token" element={<LPtoken />} />
                    <Route path="/stake" element={<Stake />} />
                    <Route path="/stake/token" element={<Token />} />
                    <Route path="/farm" element={<Farm />} />
                    <Route path="/farm/manage" element={<ManageFarm />} />
                    <Route path="/NFTs" element={<NFTs />} />
                </Routes>
                <Footer />
            </Wrapper>
        </div>
    );
}

export default App;
