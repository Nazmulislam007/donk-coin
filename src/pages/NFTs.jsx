import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NFTs() {
    const navigate = useNavigate();
    return (
        <div className="bg-primary-100 dark:bg-dark500 py-8">
            <section className="max-w-6xl w-[90%] mx-auto ">
                <button
                    type="button"
                    className="flex items-center py-2 px-5 bg-accent-400 rounded-full gap-2 font-medium text-white"
                    onClick={() => navigate(-1)}
                >
                    ◁ Back
                </button>
                <p className="text-center font-medium text-2xl text-accent-400 my-28">
                    Coming Soon ...
                </p>
            </section>
        </div>
    );
}
