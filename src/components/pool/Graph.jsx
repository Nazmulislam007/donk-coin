/* eslint-disable consistent-return */
import { faker } from '@faker-js/faker';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    // eslint-disable-next-line prettier/prettier
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

let width;
let height;
let gradient;
function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'hsl(22deg 100% 80%)');
        gradient.addColorStop(1, 'hsl(22deg 100% 60%)');
    }

    return gradient;
}

const options = {
    responsive: true,
    backgroundColor: 'red',
    interaction: {
        intersect: false,
        mode: 'index',
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltips: {
            callbacks: (tooltipItems) => {
                let sum = 0;

                tooltipItems.forEach((tooltipItem) => {
                    console.log(tooltipItem);
                    sum += tooltipItem.parsed.y;
                });
                return `Sum: ${sum}`;
            },
        },
    },
    scales: {
        y: {
            min: 0,
            max: 900,
            grid: {
                display: false,
            },
            ticks: {
                maxTicksLimit: 10,
                stepSize: 10,
                display: false,
            },
            border: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            },
            border: {
                display: false,
            },
        },
    },
};

const labels = [];

// eslint-disable-next-line no-plusplus
for (let index = 0; index < 22; index++) {
    labels.push(index);
}

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 500, max: 800 })),
            backgroundColor(context) {
                const { chart } = context;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                    return;
                }
                return getGradient(ctx, chartArea);
            },
            pointRadius: 0,
            borderWidth: 0,
            fill: true,
        },
    ],
};

export default function Graph() {
    return (
        <div className="mb-2 mt-4">
            <Line options={options} data={data} />
        </div>
    );
}
