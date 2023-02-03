import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { c } from '../assets';
import Harvest from '../components/manageFarm/Harvest';
import ManageStakeUnstake from '../components/manageFarm/ManageStakeUnstake';

export default function ManageFarm() {
    const navigate = useNavigate();

    return (
        <div className="bg-pink100 dark:bg-dark500 pt-3 pb-14">
            <section className="max-w-5xl w-[90%] mx-auto">
                <header className="">
                    <div className="fic gap-1 relative bg-[#f5d273] p-4 rounded-3xl">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="font-semibold p-2"
                        >
                            <ArrowBackIosIcon style={{ fontSize: '30px' }} />
                        </button>
                        <p className="font-medium text-2xl">Manage Farm</p>{' '}
                        <img
                            src={c}
                            alt="c"
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-44 max-sm:hidden"
                        />
                    </div>
                </header>

                <main className="flex max-lg:flex-col gap-5 mt-8">
                    <Harvest />
                    <ManageStakeUnstake />
                </main>
            </section>
        </div>
    );
}
