import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import ProductDiscountBanner from './ProductDiscountBanner'
import ProductCard from './ProductCard'
import AppPagination from '../AppPagination'
import { useGetProductsQuery } from './ProductApi'

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
  const { isError, isFetching, isLoading, isSuccess, data } = useGetProductsQuery(1);

  useEffect(() => {
    console.log('here')
    if(isSuccess) {
      console.log(data)
    }
    console.log(isLoading, isError, isFetching)
  }, [isSuccess])
  return (
    <Stack sx={ProductWrapperStyle} spacing={2}>
      <ProductDiscountBanner />

      <Box sx={ScrollableContainer}>
        <Grid container spacing={2} justifyContent={'start'} alignItems={'stretch'}>
          {
            ProductsList.map((item, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ProductCard />
                </Grid>
              )
            })
          }
        </Grid>
        <AppPagination />
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
  // maxHeight: '750px',
  // overflowY: 'scroll',
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

