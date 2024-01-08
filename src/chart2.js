import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, BarElement, CategoryScale,LinearScale, Tooltip,Legend} from 'chart.js';
ChartJS.register(BarElement,CategoryScale,LinearScale, Tooltip,Legend);

const RevenueByJobTypes = () => {
  const data = {
    labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement','Maintenance', 'Material Sale' ],
    datasets: [
      {
        label: 'Revenue for November 2019',
        backgroundColor: 'rgba(0, 128, 0, 0.7)', 
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 128, 0, 0.9)',
        hoverBorderColor: 'rgba(0, 128, 0, 1)',
        data: [182000,118000,80000,78000,44000,42000,10000],
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        stepSize: 20000,
        max: 190000,
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
      <h2>Revenue By Job Types</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueByJobTypes;
