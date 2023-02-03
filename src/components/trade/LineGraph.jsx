import { faker } from '@faker-js/faker';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    // eslint-disable-next-line prettier/prettier
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
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
            min: 200,
            max: 800,
            ticks: {
                maxTicksLimit: 5,
                stepSize: 100,
            },
            grid: {
                display: false,
            },
        },
        x: {
            grid: {
                display: false,
            },
            ticks: {
                maxTicksLimit: 5,
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
            data: labels.map(() => faker.datatype.number({ min: 400, max: 700 })),
            borderColor: '#1E6327',
            backgroundColor: '#fff',
            pointRadius: 0,
            borderWidth: 1,
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 400, max: 700 })),
            borderColor: '#3CC346',
            backgroundColor: '#fff',
            pointRadius: 0,
            borderWidth: 1,
        },
        {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 400, max: 700 })),
            backgroundColor: '#fff',
            borderColor: '#1492BC',
            pointRadius: 0,
            borderWidth: 1,
        },
        {
            label: 'Dataset 4',
            data: labels.map(() => faker.datatype.number({ min: 400, max: 700 })),
            backgroundColor: '#fff',
            borderColor: '#6D8DBC',
            pointRadius: 0,
            borderWidth: 1,
        },
    ],
};

export default function LineGraph() {
    return (
        <div className="lg:mt-16 mt-10 w-[95%] inline-block relative h-80 mx-auto">
            <Line options={options} data={data} />
        </div>
    );
}
