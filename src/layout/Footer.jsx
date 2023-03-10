import React from 'react';
import { discord, github, m, twitter } from '../assets';

export default function Footer() {
    return (
        <footer className="py-24 dark:bg-dark400 dark:text-dark900">
            <div className="max-w-6xl w-[90%] mx-auto flex items-start justify-between gap-8 flex-wrap">
                <ul>
                    <li className="font-bold text-xl mb-4 dark:text-white">Need help?</li>
                    {/* <li className="mb-4 text-sm font-medium">
                        Visit{' '}
                        <a href="/" className="text-accent-400 hover:underline">
                            our support centre
                        </a>{' '}
                        for troubleshooting
                    </li> */}
                    <li className="mb-5 text-sm font-medium">
                        Join{' '}
                        <a
                            target="_blank"
                            href="https://discord.gg/c5SnGZWUF8"
                            className="text-accent-400 hover:underline"
                            rel="noreferrer"
                        >
                            our official Discord
                        </a>{' '}
                        for dedicated support
                    </li>
                    <li className="mb-5">
                        <ul className="flex items-center gap-3 justify-between w-full">
                            <li className="w-10 h-10 rounded-full bg-accent-400 p-2">
                                <a
                                    target="_blank"
                                    href="https://discord.gg/c5SnGZWUF8"
                                    rel="noreferrer"
                                >
                                    <img src={discord} alt="discord" />
                                </a>
                            </li>
                            <li className="w-10 h-10 rounded-full bg-accent-400 p-2">
                                <a
                                    target="_blank"
                                    href="https://twitter.com/donksol?s=21&t=H840g90JZa4v2LPWSf689Q"
                                    rel="noreferrer"
                                >
                                    <img src={twitter} alt="twitter" />
                                </a>
                            </li>
                            <li className="w-10 h-10 rounded-full bg-accent-400">
                                <a href="/">
                                    <img src={m} alt="m" />
                                </a>
                            </li>
                            <li className="w-10 h-10 rounded-full bg-accent-400 p-1">
                                <a href="/">
                                    <img src={github} alt="github" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <ul className="flex items-center gap-2 text-accent-400 font-medium text-sm flex-wrap">
                            <li>
                                <a href="/">Security</a>
                            </li>
                            <li>
                                <a href="/">Developers</a>
                            </li>
                            <li>
                                <a href="/">Privacy</a>
                            </li>
                            <li>
                                <a href="/">Terms of Service</a>
                            </li>
                        </ul>
                    </li> */}
                </ul>
                <div>
                    <ul>
                        <li className="font-semibold mb-2 dark:text-white">DONK COIN Token</li>
                        <li className="hover:underline mb-2 text-sm">
                            <a href="/">Coingecko</a>
                        </li>
                        <li className="hover:underline mb-2 text-sm">
                            <a href="/">CoinMarketCap</a>
                        </li>
                    </ul>
                    {/* <ul>
                        <li className="font-semibold mb-2 dark:text-white">Analytics</li>
                        <li className="hover:underline mb-2 text-sm">
                            <a href="/">Token Terminal </a>
                        </li>
                        <li className="hover:underline mb-2 text-sm">
                            <a href="/">Defi Llama</a>
                        </li>
                        <li className="hover:underline mb-2 text-sm">
                            <a href="/">Gecko Terminal</a>
                        </li>
                    </ul> */}
                </div>
                {/* <ul>
                    <li className="font-semibold mb-2 dark:text-white">Exchanges</li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="/">Binance</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="/">Crypto.com</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="/">Gate.io</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="/">MEXC</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="/">OKX</a>
                    </li>
                </ul> */}
                <ul>
                    <li className="font-semibold mb-2 dark:text-white">Business</li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="mailto:donkcoin.relations@gmail.com">Apply for Partnership</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="mailto:donkcoin.relations@gmail.com">Token Listing</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="mailto:donkcoin.relations@gmail.com">NFT Listing</a>
                    </li>
                    <li className="hover:underline mb-2 text-sm">
                        <a href="mailto:donkcoin.relations@gmail.com">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
