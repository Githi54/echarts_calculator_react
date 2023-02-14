import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { DiscreteSlider } from "./components/DiscreteSlider";
import { HorizontalCharts } from "./components/HorizontalCharts";

function App() {
  const [storageCount, setStorageCount] = useState<number | number[]>(100);
  const [transferCount, setTransferCount] = useState<number | number[]>(100);

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
      <HorizontalCharts />
    </div>
  );
}

export default App;
