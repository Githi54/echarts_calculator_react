import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import Radio from "@mui/material/Radio";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getPrice } from "../../helpers/getPrice";
import { Container } from "@mui/system";
import { Box, Typography } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

type Props = {
  storageCount: number;
  transferCount: number;
};

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
      display: false,
      text: "Price calculator",
    },
  },
};

export const HorizontalCharts: React.FC<Props> = ({
  storageCount,
  transferCount,
}) => {
  const [bunnyPlan, setBunnyPlan] = useState("hhd");

  function getBunnyPrice(plan: string): number {
    return plan === "hhd" ? 0.01 : 0.02;
  }

  const [scalewayPlan, setScalewayPlan] = useState("multi");

  function getScalewayPrice(plan: string): number {
    return plan === "multi" ? 0.06 : 0.03;
  }

  const [backblazePrice, setBackblazePrice] = useState(
    getPrice(7, 0.005, 0.01, storageCount, transferCount)
  );
  const [bunnyPrice, setBunnyPrice] = useState(
    getPrice(0, getBunnyPrice(bunnyPlan), 0.01, storageCount, transferCount, 10)
  );
  const [scalewayPrice, setScalewayPrice] = useState(
    getPrice(
      0,
      getScalewayPrice(scalewayPlan),
      0.02,
      storageCount,
      transferCount,
      undefined,
      75
    )
  );
  const [vultrPrice, setVultrPrice] = useState(
    getPrice(5, 0.01, 0.01, storageCount, transferCount)
  );

  const [backblazeColor, setBackblazeColor] = useState("gray");
  const [bunnyColor, setBunnyColor] = useState("gray");
  const [scalewayColor, setScalewayColor] = useState("gray");
  const [vultrColor, setVultrColor] = useState("gray");

  function getColors(
    backblaze: number,
    bunny: number,
    scaleway: number,
    vultr: number
  ) {
    const minPrice = Math.min(backblaze, bunny, scaleway, vultr);

    backblaze === minPrice ? setBackblazeColor("red") : setBackblazeColor("gray");
    bunny === minPrice ? setBunnyColor("orange") : setBunnyColor("gray");
    scaleway === minPrice ? setScalewayColor("violet") : setScalewayColor("gray");
    vultr === minPrice ? setVultrColor("blue") : setVultrColor("gray");
  }

  useEffect(() => {
    getColors(backblazePrice, bunnyPrice, scalewayPrice, vultrPrice);
    setBackblazePrice(getPrice(7, 0.005, 0.01, storageCount, transferCount));
    setBunnyPrice(
      getPrice(
        0,
        getBunnyPrice(bunnyPlan),
        0.01,
        storageCount,
        transferCount,
        10
      )
    );
    setScalewayPrice(
      getPrice(
        0,
        getScalewayPrice(scalewayPlan),
        0.02,
        storageCount,
        transferCount,
        undefined,
        75
      )
    );
    setVultrPrice(getPrice(5, 0.01, 0.01, storageCount, transferCount));
  }, [storageCount, transferCount, bunnyPlan, scalewayPlan, backblazePrice, bunnyPrice, scalewayPrice, vultrPrice]);

  const labels = ["backblaze", "bunny", "scaleway", " vultr"];

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: [backblazePrice, bunnyPrice, scalewayPrice, vultrPrice],
        borderColor: [backblazeColor, bunnyColor, scalewayColor, vultrColor],
        backgroundColor: [backblazeColor, bunnyColor, scalewayColor, vultrColor],
      },
    ],
  };

  const handleChangeBunny = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBunnyPlan(event.target.value);
  };

  const controlPropsBunny = (item: string) => ({
    checked: bunnyPlan === item,
    onChange: handleChangeBunny,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleChangeScaleway = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScalewayPlan(event.target.value);
  };

  const controlPropsScaleway = (item: string) => ({
    checked: scalewayPlan === item,
    onChange: handleChangeScaleway,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <Container>
      <Bar options={options} data={data} />
      <Box
        sx={{
          display: "flex",
          maxWidth: "min-content",
          position: "relative",
          bottom: "330px",
          right: "50px",
        }}
        className="bunny_plan"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "10px" }}>HHD</Typography>
          <Radio {...controlPropsBunny("hhd")} size="small" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "10px" }}>SSD</Typography>
          <Radio {...controlPropsBunny("ssd")} size="small" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "min-content",
          position: "relative",
          bottom: "230px",
          right: "55px",
        }}
        className="scaleway_plan"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "10px" }}>Multi</Typography>
          <Radio {...controlPropsScaleway("multi")} size="small" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontSize: "10px" }}>Single</Typography>
          <Radio {...controlPropsScaleway("single")} size="small" />
        </Box>
      </Box>
    </Container>
  );
};
