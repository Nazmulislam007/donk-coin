import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NFTs() {
    const navigate = useNavigate();
    return (
        <div className="bg-pink100 dark:bg-dark500 py-8">
            <section className="max-w-6xl w-[90%] mx-auto ">
                <button
                    type="button"
                    className="flex items-center py-2 px-5 bg-orange500 rounded-full gap-2 font-medium text-white"
                    onClick={() => navigate(-1)}
                >
                    ◁ Back
                </button>
                <p className="text-center font-medium text-2xl text-orange500 my-28">
                    Coming Soon ...
                </p>
            </section>
        </div>
    );
}
