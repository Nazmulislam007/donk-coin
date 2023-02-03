import React from 'react';
import { bitcoin, solona, updownarrow } from '../../assets';
import ExChangeBtn from './ExChangeBtn';
import Settings from './Settings';

export default function SwipBox({ flipBtn, setFlipBtn }) {
    return (
        <div className="basis-full mt-8 lg:mt-0">
            <Settings />

            <form className="p-8 sm:px-12 bg-white dark:bg-dark400 rounded-2xl lg:mt-16 mt-8">
                {flipBtn ? (
                    <ExChangeBtn img={bitcoin} name="Bitcoin" />
                ) : (
                    <ExChangeBtn img={solona} name="Solona" />
                )}
                <div className="w-full relative h-[1px] bg-black dark:bg-white my-12">
                    <button
                        type="button"
                        onClick={() => setFlipBtn(!flipBtn)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
                    >
                        <img src={updownarrow} alt="arrow" />
                    </button>
                </div>
                {!flipBtn ? (
                    <ExChangeBtn img={bitcoin} name="Bitcoin" />
                ) : (
                    <ExChangeBtn img={solona} name="Solona" />
                )}
                <button
                    type="button"
                    className="bg-orange500 w-[80%] mt-8 mx-[10%] text-white py-2.5 rounded-full"
                >
                    Swap
                </button>
            </form>
        </div>
    );
}
