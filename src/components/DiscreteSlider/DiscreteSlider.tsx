import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value} GB`;
}

type Props = {
    setMemoryCount: (val: number | number[]) => void;
}

export const DiscreteSlider: React.FC<Props> = ({ setMemoryCount }) => {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Memory"
        defaultValue={100}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={1000}
        onChange={(_, value) => setMemoryCount(value)}
      />
    </Box>
  );
}
