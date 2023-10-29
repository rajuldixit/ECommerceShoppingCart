import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import logo from '../../logo.svg'
import React from 'react'

const ProductCard = () => {
  return (
    <Card sx={CardStyle}>
      <CardMedia
        sx={{ height: 140 }}
        image={logo}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          250 INR
        </Typography>
      </CardContent>
    </Card>
  )
}

const CardStyle = {
    cursor: 'pointer',
    borderRadius: '16px',
    'box-shadow': '-4px -3px 16px -9px rgba(0,0,0,0.1)'
}

export default ProductCard