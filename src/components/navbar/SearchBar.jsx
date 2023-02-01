import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export default function SearchBar() {
    return (
        <label
            htmlFor="search"
            className="flex items-center gap-3 bg-white dark:bg-dark400 px-2 xl:px-3 py-2 rounded-3xl xl:min-w-[280px]"
        >
            <button className="w-6 h-6">
                <SearchIcon />
            </button>
            <input
                type="text"
                id="search"
                placeholder="Search by symbol or name"
                className="text-sm w-full outline-none focus:outline-none bg-transparent dark:placeholder:text-dark900"
            />
        </label>
    );
}
