import React, { useState } from 'react';
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Menu, MenuItem } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search=styled("div")(({theme})=>({
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  outlineStyle:"solid",
  outlineWidth:"thin",
  width:"40%"
}));

const Icon=styled(Box)(({theme})=>({
 display:"none",
 gap:"20px",
 alignItems:"center",
 [theme.breakpoints.up("sm")]:{display:"flex"}
}));

const UserBox=styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.down("sm")]:{display:"flex"}
}))

function Navbar() {
  const [open,setOpen]=useState(false);
  return (
    <AppBar position="sticky" sx={{overflow:"auto"}}> 

      <StyledToolbar> 

          <InstagramIcon sx={{display:{xs:"block",sm:"none"}}}/>
          <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>InstaKilogram</Typography> 
          <Search ><InputBase placeholder='Search'/></Search>

          <Icon>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>  
            <Avatar sx={{ width:30, height:30, bgcolor: deepOrange[500], cursor:"pointer" }} onClick={e=>setOpen(true)}>S</Avatar>
          </Icon>

          <UserBox>
            <Avatar sx={{ width:30, height:30, bgcolor: deepOrange[500], cursor:"pointer" }} onClick={e=>setOpen(true)}>S</Avatar>
            <Typography variant="span"> Srinath </Typography>
          </UserBox>

      </StyledToolbar> 

      <Menu id="demo-positioned-menu" aria-labelledby="demo-positioned-button" 
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>

      </Menu>

    </AppBar>
  )
}

export default Navbar