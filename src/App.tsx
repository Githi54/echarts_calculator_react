import { Box, Container, Typography } from "@mui/material";
import { useState } from 'react';
import { DiscreteSlider } from "./components/DiscreteSlider";
import { HorizontalCharts } from "./components/HorizontalCharts";

function App() {
  const [storageCount, setStorageCount] = useState(100);
  const [transferCount, setTransferCount] = useState(100);

  return (
    <div className="App">
      <Box sx={{ display: "flex", gap: "30px", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: "200px" }}>
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
        <Container>
          <HorizontalCharts
            storageCount={storageCount}
            transferCount={transferCount}
          />
        </Container>
      </Box>
    </div>
  );
}

export default App;
