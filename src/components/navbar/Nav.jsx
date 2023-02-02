/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import ConnectWallet from './ConnectWallet';
import DropDownList from './DropDownList';
import NavItems from './NavItems';

export default function Nav() {
    const [dark, setDark] = useState('light');
    const inverse = dark === 'light' ? 'dark' : 'light';
    const [connectWallet, setConnectWallet] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(dark);
        root.classList.remove(inverse);
    }, [dark, inverse]);

    return (
        <nav className="bg-pink100 dark:bg-dark500 md:py-6 py-2">
            <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto w-[90%]">
                <Link to="/" className="h-16 w-16 min-w-[4rem]">
                    <img src={logo} alt="logo" />
                </Link>
                <NavItems />

                <div className="flex items-center gap-4">
                    <DropDownList />

                    <button
                        type="button"
                        className="h-[40px] w-[40px] rounded-full bg-white p-2 dark:bg-dark700 dark:text-white"
                        onClick={() => setDark((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                    >
                        {dark === 'dark' ? <Brightness4Icon /> : <DarkModeIcon />}
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-3 bg-white dark:bg-dark700 lg:px-5 px-2 max-lg:py-2 py-[8.1px] rounded-full dark:text-white"
                        onClick={() => setConnectWallet(true)}
                    >
                        <BackupTableOutlinedIcon />
                        <span className="text-sm font-semibold lg:block hidden">Wallet Connet</span>
                    </button>
                    <ConnectWallet
                        connectWallet={connectWallet}
                        setConnectWallet={setConnectWallet}
                    />
                </div>
            </div>
        </nav>
    );
}
