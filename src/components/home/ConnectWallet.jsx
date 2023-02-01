/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

export default function ConnectWallet({ setConnectWallet, connectWallet }) {
    return (
        <>
            <button
                type="button"
                className={`left-0 top-0 w-full h-[100vh] bg-[#ffffff50] blur-3xl z-8 ${
                    connectWallet ? 'fixed' : 'hidden'
                }`}
                onClick={() => setConnectWallet(false)}
            />
            <div
                className={`${
                    connectWallet ? 'fixed' : 'hidden'
                } left-1/2 top-1/2 w-full max-w-[600px] z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-16 rounded-3xl`}
            >
                <div className="md:w-[80%] w-full mx-auto">
                    <header className="mb-9">
                        <h3 className="text-orange900 font-semibold text-2xl text-center mb-3">
                            Connect a Wallet
                        </h3>
                        <p className="text-center text-gray-500">
                            Connect wallet to sign in or create account
                        </p>
                    </header>
                    <button
                        type="button"
                        className="flex items-center gap-4 mb-3 px-4 py-2 shadow shadow-gray-100 rounded-xl"
                    >
                        <img src="./assets/phantom.PNG" alt="phantom" width="60" />
                        <div className="text-start">
                            <p className="text-xl font-semibold">Phantom</p>
                            <p className="text-sm text-gray-500">Connect your phantom wallet</p>
                        </div>
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-4 px-4 py-2 shadow shadow-gray-100 rounded-xl"
                    >
                        <img src="./assets/connect.PNG" alt="phantom" width="60" />
                        <div className="text-start">
                            <p className="text-xl font-semibold">Wallet Connect</p>
                            <p className="text-sm text-gray-500">
                                Scan with your mobile device to connect
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
