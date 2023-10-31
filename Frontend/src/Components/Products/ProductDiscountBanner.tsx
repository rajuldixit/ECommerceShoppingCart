import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ProductDiscountBanner = () => {
  return (
    <Stack sx={DiscountedProductStyle}>
      <Typography color={'#645151'} variant='h6'>We have new discount offers</Typography>
      <Button variant='outlined'size='small'>Find out</Button>
    </Stack>
  )
}

const DiscountedProductStyle = {
    backgroundColor: '#FFDB58',
    width: '100%',
    borderRadius: '8px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2% 4%',
    boxSizing: 'border-box'
};

export default ProductDiscountBanner