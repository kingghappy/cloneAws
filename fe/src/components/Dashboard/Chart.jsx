import { Line } from "react-chartjs-2";

const Chart = ({ title }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "CPU Usage",
        data: [20, 30, 50, 40, 60],
        borderColor: "blue",
        tension: 0.4,
      },
      {
        label: "RAM Usage",
        data: [10, 40, 30, 50, 70],
        borderColor: "green",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-gray-600 text-sm mb-2">{title}</h4>
      <Line data={data} />
    </div>
  );
};

export default Chart;
