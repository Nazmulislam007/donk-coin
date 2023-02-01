import React from 'react';

export default function TopFarmCard() {
    return (
        <article className="bg-white dark:bg-dark300 hover:shadow-lg p-3 rounded-md">
            <div className="flex items-center gap-4 justify-between dark:text-darkText">
                <div className="flex items-center gap-1">
                    <img src="./assets/terra.PNG" alt="terra" width="15" />
                    <img src="./assets/bitcoin.PNG" alt="bitcoin" width="15" />
                    <span className="font-semibold text-[11px] leading-4">TERRA-BITCOIN</span>
                </div>
                <div className="text-[10px] flex items-center gap-1">
                    <span>APR (30D)</span>
                    <span>2.58%</span>
                    <img src="./assets/c.PNG" alt="terra" width="15" />
                </div>
            </div>
        </article>
    );
}
