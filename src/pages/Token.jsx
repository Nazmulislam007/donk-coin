import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { bitcoin } from '../assets/index';
import Overview from '../components/token/Overview';
import StakeUnStake from '../components/token/StakeUnStake';

export default function Token() {
    const navigate = useNavigate();

    return (
        <div className="bg-primary-100 dark:bg-dark500 pt-3 pb-14">
            <section className="max-w-6xl w-[90%] mx-auto">
                <header className="pb-14">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="fic gap-1 font-semibold px-2 py-2 mb-4 dark:text-dark900"
                    >
                        <ArrowBackOutlinedIcon fontSize="10px" />
                        Back
                    </button>
                    <div className="fic gap-2">
                        <img src={bitcoin} alt="bitcoin" width={50} />
                        <p className="font-semibold text-5xl dark:text-darkText">Bitcoin</p>
                    </div>
                    <p className="text-sm mt-2 ml-1 text-primary-contrast-100 dark:text-dark900">
                        Rewards distributed very few days
                    </p>
                </header>

                <main className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <Overview />
                    <StakeUnStake />
                </main>
            </section>
        </div>
    );
}
