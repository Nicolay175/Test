import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const HeaderBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Рога и копыта корпорейшн
                    </Typography>
                    <Button color="inherit" href="/home">Домой</Button>
                    <Button color="inherit" href="/about">О нас</Button>
                    <Button color="inherit" href="/list">Список</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderBar;