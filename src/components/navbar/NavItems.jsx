import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function NavItems() {
    const [toggle, setToggle] = useState(false);

    return (
        <ul className="max-md:fixed z-50 max-md:bg-white max-md:w-full max-md:bottom-0 max-md:left-0 justify-around flex items-center md:gap-10 text-pink900 font-medium dark:text-dark900 max-md:dark:bg-dark400">
            <li className="py-[7px] rounded-md dark:hover:bg-[#ececec1b] px-4 hover:bg-[#cdcdcd6a] transition-all basis-full max-md:py-3 text-center">
                <Link to="/trade">Trade</Link>
            </li>
            <li className="py-[7px] rounded-md dark:hover:bg-[#ececec1b] px-4 hover:bg-[#cdcdcd6a]  transition-all basis-full max-md:py-3 text-center">
                <Link to="/pool">Pool</Link>
            </li>
            <li className="py-[7px] rounded-md dark:hover:bg-[#ececec1b] px-4 hover:bg-[#cdcdcd6a] transition-all basis-full max-md:py-3 text-center">
                <Link to="/stake">Stake</Link>
            </li>

            {/* tablet version */}
            <li className="xl:hidden relative py-[7px] rounded-md px-4 md:dark:hover:bg-[#ececec1b] transition-all basis-full text-center">
                <button
                    className="w-full max-md:py-3 max-md:dark:hover:bg-[#ececec1b] max-md:hover:bg-[#cdcdcd6a] rounded-md"
                    onClick={() => setToggle(!toggle)}
                >
                    <MoreHorizIcon />
                </button>

                <ul
                    className={`absolute md:top-[150%] max-md:-top-[140px] right-0 min-w-[300px] bg-white  dark:bg-dark300 rounded-2xl py-5 px-5 ${
                        toggle ? '' : 'hidden'
                    }`}
                >
                    <li className="light:border">
                        <SearchBar />
                    </li>
                    <li className="mt-3 py-2 px-3 rounded-md hover:bg-pink100 dark:hover:bg-dark400 dark:text-dark900 text-start">
                        <Link to="/farm">Farm</Link>
                    </li>
                </ul>
            </li>

            <li className="hidden xl:block py-[7px] px-4 dark:hover:bg-[#ececec1b] hover:bg-[#cdcdcd6a] transition-all basis-full max-md:py-3 text-center rounded-md">
                <Link to="/farm">Farm</Link>
            </li>
            <li className="hidden xl:block py-1 px-2 transition-all">
                <SearchBar />
            </li>
        </ul>
    );
}
