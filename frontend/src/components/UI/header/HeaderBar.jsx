import React from 'react';
import {AppBar, Box, Button, colors, Toolbar, Typography} from "@mui/material";

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