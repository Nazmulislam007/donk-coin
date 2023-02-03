import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import StaticStatesProvider from './context/StaticStatesProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <StaticStatesProvider>
                <App />
            </StaticStatesProvider>
        </BrowserRouter>
    </React.StrictMode>
);
