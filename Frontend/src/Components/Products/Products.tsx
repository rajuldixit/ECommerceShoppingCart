import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import ProductDiscountBanner from './ProductDiscountBanner'
import ProductCard from './ProductCard'

const ProductsList = [
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  },
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  },
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  },
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  },
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  },
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  },
  {
    id: 1,
    imageLink: '',
    name: '',
    description: '',
    price: 200,
    currency: 'INR'
  }
]
const Products = () => {
  return (
    <Stack sx={ProductWrapperStyle} spacing={2}>
      <ProductDiscountBanner />
      <Box sx={ScrollableContainer}>
        <Grid container spacing={2} justifyContent={'start'} alignItems={'stretch'}>
          {
            ProductsList.map((item, index) => {
              return (
                <Grid item xs={12} md={4} key={index}>
                  <ProductCard />
                </Grid>
              )
            })
          }
        </Grid>
      </Box>  
    </Stack>
  )
}

const ProductWrapperStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '8px',
  boxSizing: 'border-box'
};
const ScrollableContainer = {
  maxHeight: '450px',
  overflowY: 'scroll',
  marginLeft: '30px',
	float: 'left',
	width: '100%',
	background: 'aliceblue',
	marginBottom: '25px',
  padding: '8px 20px',
  boxSizing: 'border-box',
  borderRadius: '8px'
};

const ScrollbarStyle = {
  
}
export default Products

