import { Box, Container, Typography } from "@mui/material";
import { DiscreteSlider } from "../DiscreteSlider";
import { HorizontalCharts } from "../HorizontalCharts";

type Props = {
    storageCount: number;
    setStorageCount: (val: number) => void;
    transferCount: number;
    setTransferCount: (val: number) => void;
}

export const DesktopVersion: React.FC<Props> = ({ 
    storageCount, 
    setStorageCount, 
    transferCount, 
    setTransferCount
}) => {
  return (<Box
    sx={{
      display: "flex",
      gap: "30px",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Box
      sx={{ display: "flex", justifyContent: "space-between", gap: "200px" }}
    >
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
  </Box>);
};
