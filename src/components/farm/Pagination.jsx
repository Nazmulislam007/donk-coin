import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React, { useState } from 'react';

export default function Pagination() {
    const [page, setPage] = useState(1);

    return (
        <div className="flex justify-center md:gap-2 text-sm font-medium ">
            <button className="w-10 h-10 hover:bg-white rounded-full text-gray-400 dark:hover:bg-dark300 dark:text-darkText">
                <ChevronLeftIcon />
            </button>
            {[1, 2, 3, 4].map((p) => (
                <button
                    className={`w-10 h-10 hover:bg-white dark:hover:bg-dark700 dark:text-darkText rounded-full ${
                        page === p ? 'bg-white dark:bg-dark300' : ''
                    }`}
                    key={p}
                    onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}
            <button className="w-10 h-10 hover:bg-white dark:hover:bg-dark300 dark:text-darkText rounded-full rotate-180">
                <ChevronLeftIcon />
            </button>
        </div>
    );
}
