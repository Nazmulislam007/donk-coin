import React from 'react';
import { Link } from 'react-router-dom';
import { bitcoin, c, terra } from '../../assets';

export default function TopFarmCard() {
    return (
        <Link to="/farm/manage" className="bg-white dark:bg-dark300 hover:shadow-lg p-3 rounded-md">
            <div className="flex items-center gap-4 justify-between dark:text-darkText">
                <div className="flex items-center gap-1">
                    <img src={terra} alt="terra" width="15" />
                    <img src={bitcoin} alt="bitcoin" width="15" />
                    <span className="font-semibold text-[11px] leading-4">TERRA-BITCOIN</span>
                </div>
                <div className="text-[10px] flex items-center gap-1">
                    <span>APR (30D)</span>
                    <span>2.58%</span>
                    <img src={c} alt="terra" width="15" />
                </div>
            </div>
        </Link>
    );
}
