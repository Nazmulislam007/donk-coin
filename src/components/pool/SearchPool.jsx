import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import AddLiquidity from './AddLiquidity';

export default function SearchPool() {
    return (
        <div className="flex items-center gap-3 mt-3 mb-10 max-lg:flex-col-reverse">
            <label
                htmlFor="searchTable"
                className="flex flex-1 items-center gap-2 p-2 border border-gray-300 rounded-md max-lg:w-full dark:text-white dark:border-dark900"
            >
                <SearchIcon />
                <input
                    type="text"
                    id="searchTable"
                    placeholder="Search by symbol or name"
                    className="w-full outline-none focus:outline-none text-sm bg-transparent"
                />
            </label>
            <AddLiquidity />
        </div>
    );
}
