import { Box, Stack } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'
import Filter from '../../Components/Filter'
import Products from '../../Components/Products/Products'

const Home = () => {
  return (
    <>
      <Stack sx={[{padding: {xs: '1%', md: '1% 5%'}},ContainerWrapperStyle]} spacing={4}>
        <Header />
        <Stack direction={'row'} spacing={2}>
          <Box sx={{width: '25%'}}>
            <Filter />
          </Box>
          <Box sx={{width: '75%'}}>
            <Products />
          </Box>     
        </Stack>
      </Stack>  
    </>
  )
}

const ContainerWrapperStyle = {
  backgroundColor: '#eff1f8',
  width: '100%',
  boxSizing: 'border-box'
};

export default Home