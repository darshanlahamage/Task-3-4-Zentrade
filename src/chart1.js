import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, BarElement, CategoryScale,LinearScale, Tooltip,Legend} from 'chart.js';
ChartJS.register(BarElement,CategoryScale,LinearScale, Tooltip,Legend);

const RevenueByLocationChart = () => {
  const data = {
    labels: ['Everett', 'Seattle', 'Lynnwood', 'Mothell', 'Mukilteo','Edmonds' ],
    datasets: [
      {
        label: 'Revenue for November 2019',
        backgroundColor: 'rgba(0, 128, 0, 0.7)', 
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 128, 0, 0.9)',
        hoverBorderColor: 'rgba(0, 128, 0, 1)',
        data: [ 80000, 75000, 49000, 47500 , 46000,35000 ],
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        stepSize: 5000,
        max: 90000,
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          stepSize: 20000,
        },
      },
    },
  };
  

  return (
    <div>
      <h2>Revenue by Location</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueByLocationChart;
