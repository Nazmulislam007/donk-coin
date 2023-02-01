import React from 'react';
import FarmCard from './FarmCard';

export default function FarmCards() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-3 mb-16">
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
            <FarmCard />
        </div>
    );
}
