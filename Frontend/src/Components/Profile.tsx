import { Stack, IconButton, Badge, Popover, Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import React, { useState } from 'react';

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Stack direction={'row'}>
       <IconButton
            size="large"
            // aria-label="show 17 new notifications"
            color="inherit"
        >
            <Badge badgeContent={2} color="error">
            <NotificationsIcon />
            </Badge>
        </IconButton> 
        <IconButton
          onClick={handleClick}  
          size="large"
          edge="end"
          // aria-label="account of current user"
        //   aria-controls={menuId}
          aria-haspopup="true"
        //   onClick={handleProfileMenuOpen}
          color="inherit"
          >
          <AccountCircle />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover> 
    </Stack>
  )
}

export default Profile