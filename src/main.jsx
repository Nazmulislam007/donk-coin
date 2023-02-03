import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ConnectWalletProvider from './context/ConnectWalletProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ConnectWalletProvider>
                <App />
            </ConnectWalletProvider>
        </BrowserRouter>
    </React.StrictMode>
);
