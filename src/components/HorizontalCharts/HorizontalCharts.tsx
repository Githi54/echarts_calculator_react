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

function getPrice(
  minPrice: number, 
  storagePrice: number, 
  transferPrice: number, 
  storageCount: number, 
  transferCount: number,
  maxPrice?: number
): number {
  let price = 0;

  price += ((storagePrice * storageCount) + (transferCount * transferPrice));

  if (price < minPrice) {
    price = minPrice;
  }
 
  if (maxPrice && price > maxPrice) {
    price = maxPrice;
  }

  return price;
}

export const HorizontalCharts: React.FC<Props> = ({ storageCount, transferCount}) => {
  const [backblazePrice, setBackblazePrice] = useState(getPrice(7, 0.005, 0.01, storageCount, transferCount));

  useEffect(() => {
    setBackblazePrice(getPrice(7, 0.005, 0.01, storageCount, transferCount));
  }, [storageCount, transferCount])
  const labels = ["backblaze", "bunny", "scaleway", " vultr"];
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [backblazePrice, 400, 324, 2],
        borderColor: ["red", "orange", "violet", "blue"],
        backgroundColor: ["red", "orange", "violet", "blue"],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
