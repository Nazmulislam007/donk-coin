import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Farm from './pages/Farm';
import Home from './pages/Home';
import Pool from './pages/Pool';
import Stake from './pages/Stake';
import Trade from './pages/Trade';

const Wrapper = ({ children }) => {
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

function App() {
    const [connectWallet, setConnectWallet] = useState(false);

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
                <Nav setConnectWallet={setConnectWallet} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                setConnectWallet={setConnectWallet}
                                connectWallet={connectWallet}
                            />
                        }
                    />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/pool" element={<Pool />} />
                    <Route path="/stake" element={<Stake />} />
                    <Route path="/farm" element={<Farm />} />
                </Routes>
                <Footer />
            </Wrapper>
        </div>
    );
}

export default App;
