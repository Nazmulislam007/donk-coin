import React, { useState } from 'react';
import SwipBox from '../components/trade/SwipBox';
import SwipResult from '../components/trade/SwipResult';

export default function Trade() {
    const [flipBtn, setFlipBtn] = useState(false);

    return (
        <div className="bg-primary-100 dark:bg-dark500 py-8 min-h-[80vh]">
            <section className="max-w-6xl w-[90%] mx-auto flex gap-5 max-lg:flex-col">
                <SwipResult flipBtn={flipBtn} />
                <SwipBox setFlipBtn={setFlipBtn} flipBtn={flipBtn} />
            </section>
        </div>
    );
}
