import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TradTableRow({ rowData }) {
    const navigate = useNavigate();
    const { no, _24H, _7D, icon, name, price, volume } = rowData || {};

    return (
        <tr
            className="rounded-lg dark:hover:bg-dark700 hover:bg-[#e8e2de] dark:text-darkText text-sm font-semibold cursor-pointer"
            onClick={() => navigate(`/trade`)}
        >
            <td className="py-5 align-middle text-center">{no}</td>
            <td className="flex items-center justify-center gap-2 py-5">
                <img src={icon} alt="terra" width={25} />
                <span>{name}</span>
            </td>
            <td className="py-5 align-middle text-center">{volume}</td>
            <td className="py-5 align-middle text-center">{price}</td>
            <td className="!text-green-500 py-5 align-middle text-center">{_24H}</td>
            <td className="!text-green-500 py-5 align-middle text-center">{_7D}</td>
        </tr>
    );
}
