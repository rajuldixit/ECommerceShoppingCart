import { Stack, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'
import Profile from './Profile'

const Header = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignContent={'center'} >
      <Typography variant='h4' color='#645151' fontWeight={'bold'}>Shoppingo</Typography>
      <Search />
      <Profile />
    </Stack>
  )
}

export default Header