import React from 'react';
import Card from './Card';

export default function Cards() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-3 mb-10">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}
