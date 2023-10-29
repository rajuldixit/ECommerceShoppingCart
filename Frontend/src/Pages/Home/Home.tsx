import { Box, Stack } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header'
import Filter from '../../Components/Filter'
import Products from '../../Components/Products/Products'

const Home = () => {
  return (
    <>
      <Stack sx={ContainerWrapperStyle} spacing={2}>
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
  height: '100vh',
  padding: '1% 5%',
  boxSizing: 'border-box'
};

export default Home