import React from 'react';

export default function Header() {
    return (
        <header className="bg-pink100 md:py-32 py-16">
            <div className="max-w-6xl w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mb-24">
                <figure>
                    <img
                        src="./assets/a.PNG"
                        alt="coin"
                        className="max-w-[160px] hover:scale-110 duration-300 transition-all"
                    />
                </figure>
                <figure className="md:col-auto col-span-2">
                    <img
                        src="./assets/b.PNG"
                        alt="coin"
                        className="max-w-[160px] hover:scale-110 duration-300 transition-all"
                    />
                </figure>
                <figure className="row-[2/-1]">
                    <img
                        src="./assets/c.PNG"
                        alt="coin"
                        className="max-w-[160px] hover:scale-110 duration-300 transition-all"
                    />
                </figure>
            </div>
            <h1 className="text-center text-3xl font-semibold">One-stop decentralized trading</h1>
        </header>
    );
}
