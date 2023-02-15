import { Box, Container, Typography } from "@mui/material";
import { DiscreteSlider } from "../DiscreteSlider";
import { VerticalCharts } from "../VerticalCharts";

type Props = {
  storageCount: number;
  setStorageCount: (val: number) => void;
  transferCount: number;
  setTransferCount: (val: number) => void;
};

export const SmallScreenVersion: React.FC<Props> = ({
  storageCount,
  setStorageCount,
  transferCount,
  setTransferCount,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "30px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container>
        <VerticalCharts
          storageCount={storageCount}
          transferCount={transferCount}
        />
      </Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Container>
          <Box sx={{ display: "flex", gap: "30px"}}>
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
    </Box>
  );
};
