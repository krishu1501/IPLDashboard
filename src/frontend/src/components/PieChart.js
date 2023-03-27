import { React } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export const PieChart = ({labels, datasetLabel, data, backgroundColor}) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const charData = {
        labels: labels,
        datasets: [
          {
            label: datasetLabel,
            data: data,
            backgroundColor: backgroundColor,
            borderWidth: 0
          },
        ],
      };
    const chartOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#E7EFF1'
                }
            }
        }
    };
    return (<Pie data={charData} options={chartOptions}/>
    );
}