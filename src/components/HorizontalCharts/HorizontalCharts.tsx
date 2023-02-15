import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getPrice } from "../../helpers/getPrice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

type Props = {
  storageCount: number;
  transferCount: number;
}

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Price calculator",
    },
  },
};

export const HorizontalCharts: React.FC<Props> = ({ storageCount, transferCount}) => {
  const [backblazePrice, setBackblazePrice] = useState(getPrice(7, 0.005, 0.01, storageCount, transferCount));
  const [bunnyPrice, setBunnyPrice] = useState(getPrice(0, 0.01, 0.01, storageCount, transferCount, 10));
  const [scalewayPrice, setScalewayPrice] = useState(getPrice(0, 0.03, 0.02, storageCount, transferCount, undefined, 75));
  const [vultrPrice, setVultrPrice] = useState(getPrice(5, 0.01, 0.01, storageCount, transferCount));

  useEffect(() => {
    setBackblazePrice(getPrice(7, 0.005, 0.01, storageCount, transferCount));
    setBunnyPrice(getPrice(0, 0.001, 0.01, storageCount, transferCount, 10));
    setScalewayPrice(getPrice(0, 0.03, 0.02, storageCount, transferCount, undefined, 75));
    setVultrPrice(getPrice(5, 0.01, 0.01, storageCount, transferCount));
  }, [storageCount, transferCount])
  const labels = ["backblaze", "bunny", "scaleway", " vultr"];
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [backblazePrice, bunnyPrice, scalewayPrice, vultrPrice],
        borderColor: ["red", "orange", "violet", "blue"],
        backgroundColor: ["red", "orange", "violet", "blue"],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

