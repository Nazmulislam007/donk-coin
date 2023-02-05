import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TradTableRow({ rowData }) {
    const navigate = useNavigate();
    const { uuid, icon, symbol, price } = rowData || {};

    const isNegative24h = rowData['24hChange'].includes('-');
    const isNegative7D = rowData['7DChange'].includes('-');

    return (
        <tr
            className="rounded-lg dark:hover:bg-dark700 hover:bg-[#e8e2de] dark:text-darkText text-sm font-semibold cursor-pointer"
            onClick={() => navigate(`/trade`)}
        >
            <td className="py-5 align-middle text-start pl-5">{uuid}</td>
            <td className="flex items-center justify-start gap-2 py-5 pl-5">
                <img src={icon} alt="terra" className="w-[25px] rounded-full" />
                <span className="uppercase">{symbol}</span>
            </td>
            <td className="py-5 align-middle text-center">${rowData['24hVolume']}</td>
            <td className="py-5 align-middle text-center">${price}</td>
            <td
                className={`${
                    isNegative24h ? 'text-red-500' : 'text-green-500'
                }  py-5 align-middle text-center`}
            >
                {rowData['24hChange']}%
            </td>
            <td
                className={`${
                    isNegative7D ? 'text-red-500' : 'text-green-500'
                }  py-5 align-middle text-center`}
            >
                {rowData['7DChange']}%
            </td>
        </tr>
    );
}
