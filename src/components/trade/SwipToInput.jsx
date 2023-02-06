import React, { useState } from 'react';

export default function SwipToInput({ name }) {
    const [inputValue, setInputValue] = useState('');

    return (
        <input
            type="number"
            className="outline-none text-2xl w-1/2 text-black dark:text-darkText bg-transparent"
            placeholder="0.0"
            name={name}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
}
