import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value} GB`;
}

type Props = {
    setMemoryCount: (val: number) => void;
}

export const DiscreteSlider: React.FC<Props> = ({ setMemoryCount }) => {
  const handleChange = (_: Event, value: number | number[]) => {
    if (typeof value === 'object') {
      return;
    } else {
      setMemoryCount(value);
    }
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Memory"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={1000}
        onChange={(e, val) => handleChange(e, val)}
      />
    </Box>
  );
}
