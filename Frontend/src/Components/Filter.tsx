import { Card, CardContent, Checkbox, FormControlLabel, Slider, Stack, Typography, styled } from '@mui/material'
import { useState } from 'react';

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const Filter = () => {
  const [value, setValue] = useState<number[]>([0, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Stack spacing={1}>
      <Card sx={CardStyle}>
        <CardContent>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography>Min</Typography>
          <Typography>Max</Typography>
          </Stack>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
            value={value}
            onChange={handleChange}
          />
        </CardContent>
      </Card>
      <Card sx={CardStyle}>
        <CardContent>
          <Typography>Products</Typography>
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
        </CardContent>
      </Card>
    </Stack>
  )
}

const CardStyle = {
  borderRadius: '8px',
  boxShadow: 'none'
}

export default Filter