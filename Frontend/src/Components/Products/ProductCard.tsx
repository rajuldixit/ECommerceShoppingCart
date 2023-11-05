import { Card, CardMedia, CardContent, Typography, CardActions, Button, Rating } from '@mui/material'
import logo from '../../assets/images/iphoneCover.png'
import React, { useEffect } from 'react'
import { useGetProductsQuery } from './ProductApi'

const ProductCard = () => {
 
  return (
    <Card sx={CardStyle}>
      <CardMedia
        sx={{ height: 160, objectFit: 'cover' }}
        image={logo}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body2" >
          Iphone
        </Typography>
        <Typography variant="body2" color="text.secondary">
          250K INR
        </Typography>
        <Rating
            name="simple-controlled"
            value={2}
          />
      </CardContent>
    </Card>
  )
}

const CardStyle = {
    cursor: 'pointer',
    borderRadius: '16px',
    boxShadow: '-5px 8px 8px 0px rgba(0,0,0,0.1)'
}

export default ProductCard