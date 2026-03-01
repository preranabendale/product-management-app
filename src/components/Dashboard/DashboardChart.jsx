import React from 'react';
import { Bar } from 'react-chartjs-2';
import Footer from '../../components/Layout/Footer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = ({ totalProducts, totalOrders, totalUsers }) => {

  const data = {
    labels: ['Products', 'Orders', 'Users'],
    datasets: [{
      label: 'System Overview',
      data: [totalProducts, totalOrders, totalUsers],
      backgroundColor: ['#007bff', '#28a745', '#ffc107']
    }]
  };

  return <Bar data={data} />;
  <Footer></Footer>
};

export default DashboardChart;