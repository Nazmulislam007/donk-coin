import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import React, { useState } from 'react';

export default function PoolListBtns() {
    const [activePool, setActivePool] = useState('All Pools');

    return (
        <div className="flex md:gap-2">
            <button
                className={`flex items-center gap-2 py-2 sm:px-3 px-2 rounded-lg text-sm font-medium ${
                    activePool === 'All Pools'
                        ? 'bg-white dark:bg-dark700 dark:text-white opacity-100'
                        : 'opacity-50 dark:text-darkText'
                }`}
                onClick={() => setActivePool('All Pools')}
            >
                <CollectionsBookmarkOutlinedIcon />
                All Pools
            </button>
            <button
                className={`flex items-center gap-2 py-2 sm:px-3 px-2 rounded-lg text-sm font-medium ${
                    activePool === 'Pools'
                        ? 'bg-white dark:bg-dark700 dark:text-white opacity-100'
                        : 'opacity-50 dark:text-darkText'
                }`}
                onClick={() => setActivePool('Pools')}
            >
                <StickyNote2OutlinedIcon />
                Pools
            </button>
            <button
                className={`flex items-center gap-2 py-2 sm:px-3 px-2 rounded-lg text-sm font-medium ${
                    activePool === 'My Pools'
                        ? 'bg-white dark:bg-dark700 dark:text-white opacity-100'
                        : 'opacity-50 dark:text-darkText'
                }`}
                onClick={() => setActivePool('My Pools')}
            >
                <StarBorderPurple500Icon />
                My Pools
            </button>
        </div>
    );
}
