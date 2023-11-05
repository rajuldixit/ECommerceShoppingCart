import { Card, CardContent, Checkbox, FormControlLabel, Paper, Rating, Slider, Stack, Typography, styled } from '@mui/material'
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  boxShadow: 'none',
  textAlign: 'start',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  height: '24px'
}));

const RatingRow = styled('div')(({ theme }) => ({
  padding: theme.spacing(1 , 0),
  textAlign: 'start',
  display: 'flex',
  alignItems: 'center',
}));

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
            <Typography fontWeight={'bold'}>Min</Typography>
            <Typography fontWeight={'bold'}>Max</Typography>
          </Stack>
          <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography>{value[0]}</Typography>
            <Typography>{value[1]}</Typography>
          </Stack>
          <PrettoSlider
            valueLabelDisplay="auto"
            // aria-label="pretto slider"
            defaultValue={20}
            value={value}
            onChange={handleChange}
          />
        </CardContent>
      </Card>
      <Card sx={CardStyle}>
        <CardContent>
          <Typography  fontWeight={'bold'}>Products</Typography>
          <Stack spacing={2}>
            <Item><Checkbox /><Typography variant="body2">Product 1</Typography></Item>
            <Item><Checkbox /><Typography variant="body2">Product 1</Typography></Item>
            <Item><Checkbox /><Typography variant="body2">Product 1</Typography></Item>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={CardStyle}>
        <CardContent>
          <Typography  fontWeight={'bold'}>Brands</Typography>
          <Stack spacing={2}>
            <Item><Checkbox /><Typography variant="body2">Product 1</Typography></Item>
            <Item><Checkbox /><Typography variant="body2">Product 1</Typography></Item>
            <Item><Checkbox /><Typography variant="body2">Product 1</Typography></Item>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={CardStyle}>
        <CardContent>
          <Typography  fontWeight={'bold'}>Customer Review</Typography>
          <RatingRow>
            <Rating
              name="simple-controlled"
              value={4}
            />
            <Typography>& up</Typography>
          </RatingRow>
          <RatingRow>
            <Rating
              name="simple-controlled"
              value={3}
            />
            <Typography>& up</Typography>
          </RatingRow>
          <RatingRow>
            <Rating
              name="simple-controlled"
              value={2}
            />
            <Typography>& up</Typography>
          </RatingRow>
          <RatingRow>
            <Rating
              name="simple-controlled"
              value={1}
            />
            <Typography>& up</Typography>
          </RatingRow>

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