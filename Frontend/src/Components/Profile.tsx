import { Stack, IconButton, Badge } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';

const Profile = () => {
  return (
    <Stack direction={'row'}>
       <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
        >
            <Badge badgeContent={17} color="error">
            <NotificationsIcon />
            </Badge>
        </IconButton> 
        <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
            //   aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <AccountCircle />
        </IconButton> 
    </Stack>
  )
}

export default Profile