import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import '../../../styles/App.css';

const HeaderBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
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
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}
                    >
                        <MenuItem onClick={handleClose}><a href="/home">Домой</a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="/about">О нас</a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="/list">Список</a></MenuItem>
                    </Menu>

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Рога и копыта корпорейшн
                    </Typography>
                    <Button className='isMobile' color="inherit" href="/home">Домой</Button>
                    <Button className='isMobile' color="inherit" href="/about">О нас</Button>
                    <Button className='isMobile' color="inherit" href="/list" sx={{marginRight:2}}>Список</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderBar;