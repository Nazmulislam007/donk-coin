import React from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
    return (
        <section className="max-w-5xl mx-auto py-24 w-[90%]">
            <h2 className="text-2xl font-medium mb-10">Explore Donk Coin Finance</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                <Link
                    to="/trade"
                    className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-transparent hover:border-[#8cb88c] group transition-all duration-300"
                    style={{ backgroundColor: 'hsl(120, 34%, 86%)' }}
                >
                    <img
                        src="./assets/e.PNG"
                        className="w-[140px] group-hover:scale-110 duration-300 transition-all"
                        alt="a"
                    />
                    <p className="mt-5 font-semibold">Trade Tokens</p>
                </Link>
                <Link
                    to="/pool"
                    className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-transparent hover:border-[#86d4ef] group transition-all duration-300"
                    style={{ backgroundColor: 'hsl(195, 75%, 89%)' }}
                >
                    <img
                        src="./assets/b.PNG"
                        className="w-[140px] group-hover:scale-110 duration-300 transition-all"
                        alt="a"
                    />
                    <p className="mt-5 font-semibold">Provide Liquidity</p>
                </Link>
                <Link
                    to="/farm"
                    className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-transparent hover:border-[#fbdd8f] group transition-all duration-300"
                    style={{ backgroundColor: 'hsl(44, 77%, 88%)' }}
                >
                    <img
                        src="./assets/c.PNG"
                        className="w-[140px] group-hover:scale-110 duration-300 transition-all"
                        alt="a"
                    />
                    <p className="mt-5 font-semibold">Farm</p>
                </Link>
                <Link
                    to="/stake"
                    className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-transparent hover:border-[#ffabbf] group transition-all duration-300"
                    style={{ backgroundColor: 'hsl(345, 60%, 92%)' }}
                >
                    <img
                        src="./assets/d.PNG"
                        className="w-[140px] group-hover:scale-110 duration-300 transition-all"
                        alt="a"
                    />
                    <p className="mt-5 font-semibold">Stake</p>
                </Link>
                <div
                    className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-transparent hover:border-[#a7a7ff] group transition-all duration-300"
                    style={{ backgroundColor: 'hsl(240, 90%, 96%)' }}
                >
                    <img
                        src="./assets/a.PNG"
                        className="w-[140px]  group-hover:scale-110 duration-300 transition-all"
                        alt="a"
                    />
                    <p className="mt-5 font-semibold">Trade NFTs</p>
                </div>
                <div
                    className="flex flex-col items-center justify-center p-12 rounded-xl border-2 border-transparent hover:border-[#8381b7] group transition-all duration-300"
                    style={{ backgroundColor: 'hsl(241, 85%, 89%)' }}
                >
                    <img
                        src="./assets/c.PNG"
                        className="w-[140px] group-hover:scale-110 duration-300 transition-all"
                        alt="a"
                    />
                    <p className="mt-5 font-semibold">Trade Tokens</p>
                </div>
            </div>
        </section>
    );
}
