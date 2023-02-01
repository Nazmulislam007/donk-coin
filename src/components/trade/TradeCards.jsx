import React from 'react';
import TradeCard from './TradeCard';

export default function TradeCards() {
    return (
        <div className="overflow-y-auto h-[400px]">
            <TradeCard />
            <TradeCard />
            <TradeCard />
            <TradeCard />
            <TradeCard />
            <TradeCard />
            <TradeCard />
        </div>
    );
}
