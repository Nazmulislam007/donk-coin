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
    aspectRatio: 2 / 0.75,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            ticks: {
                maxTicksLimit: 5,
                stepSize: 250,
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
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#1E6327',
            backgroundColor: '#fff',
            borderWidth: 1,
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: '#3CC346',
            backgroundColor: '#fff',
            borderWidth: 1,
        },
        {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#fff',
            borderColor: '#1492BC',
            borderWidth: 1,
        },
        {
            label: 'Dataset 4',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: '#fff',
            borderColor: '#6D8DBC',
            borderWidth: 1,
        },
    ],
};

export default function LineGraph() {
    return (
        <div className="lg:mt-32 mt-10 w-[95%]">
            <Line options={options} data={data} />
        </div>
    );
}
