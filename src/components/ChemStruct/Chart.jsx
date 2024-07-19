import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  // Auto-import required controllers for chart types

const UserProgressChart = ({ data }) => {
  // Define the chart data and configuration
  const chartData = {
    labels: data.map(item => item.date),  // Assuming 'date' is a property of the data items
    datasets: [
      {
        label: 'Викторина бойынша ұпайлар',
        data: data.map(item => item.score),
        fill: false,
        backgroundColor: '#123456',
        borderColor: '#123456',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true
      },
    }
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default UserProgressChart;
