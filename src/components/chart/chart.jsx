
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import {Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Simple Bar chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12,2,13,14,20,12,4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [14,20,12,4,12,2,13],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BarChart =()=> {
  return (
      <div style={{backgroundColor:"white", width:"450px"}}>
          <Bar options={options} data={data} />
      </div>
  
  );
}

export default BarChart;