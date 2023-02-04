import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { litecoin } from '../assets';
import { selectSwipToken } from '../feature/token/tokenSlice';

export default function AmountInput() {
    const dispatch = useDispatch();
    const { selected } = useSelector((state) => state.token);

    return (
        <label
            htmlFor="minute"
            className="flex items-center gap-1 rounded-xl border dark:border-dark900 p-1 pl-4 border-gray-300 my-5"
        >
            <input
                type="number"
                className="dark:text-darkText bg-transparent focus:bg-transparent outline-none flex-1 w-full"
                placeholder="Enter Amount"
            />

            <button
                type="submit"
                className="fic gap-2 bg-white py-2 px-3 rounded-lg ml-1 dark:bg-dark300 dark:text-darkText"
                onClick={() => dispatch(selectSwipToken('token'))}
            >
                <img src={litecoin} alt="litecoin" width={25} />
                <p className="font-semibold text-sm">Litecoin</p>
                <svg
                    className={`w-4 h-4 ml-2 ${selected !== '' ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
        </label>
    );
}
