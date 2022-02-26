import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <Box
            sx={{
                width: 'cover',
                height: 40,
                backgroundColor: 'inherit'
            }}
        >
            <Typography
               variant="h6" align="center"
               >Тестовое задание 2022</Typography>
        </Box>
    );
};

export default Footer;