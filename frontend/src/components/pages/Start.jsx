import React from "react";
import Box from "@mui/material/Box";
import '../styles/App.css'


function Start() {
    return (
        <div>
            <Box className="box"
                 sx={{
                     backgroundImage: 'url(https://source.unsplash.com/random)',
                 }}
            >
            </Box>
        </div>
    );
}

export default Start;
