import { Box, Container, Typography } from "d:/tests/echarts_calculator/echarts_calculator_react/node_modules/@mui/material/index";
import { useState } from "react";
import { DiscreteSlider } from "./components/DiscreteSlider";
import { HorizontalCharts } from "./components/HorizontalCharts";

function App() {
  const [storageCount, setStorageCount] = useState(100);
  const [transferCount, setTransferCount] = useState(100);

  return (
    <div className="App">
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Container>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Typography>Storage:</Typography>
            <Typography>{`${storageCount}GB`}</Typography>
          </Box>
          <DiscreteSlider setMemoryCount={setStorageCount} />
        </Container>
        <Container>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Typography>Transfer:</Typography>
            <Typography>{`${transferCount}GB`}</Typography>
          </Box>
          <DiscreteSlider setMemoryCount={setTransferCount} />
        </Container>
      </Box>
      <HorizontalCharts storageCount={storageCount} transferCount={transferCount} />
    </div>
  );
}

export default App;
