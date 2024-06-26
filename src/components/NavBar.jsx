import { Link, NavLink } from 'react-router-dom';
import React from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// -------

function NavBar() {
  console.log('in nav bar')
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={NavLink} onClick={handleClose} to='/players'><VisibilityOutlinedIcon aria-hidden='true'/>View All Players</MenuItem>
            <MenuItem component={NavLink} onClick={handleClose} to='/new'><AddCircleOutlineOutlinedIcon aria-hidden='true'/>Add New Player</MenuItem>
          </Menu>
          <Typography component={Link} variant='h6' to='/' sx={{ flexGrow: 1, textDecoration: 'none', color: '#ffffff' }}>
            Recruiting Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar