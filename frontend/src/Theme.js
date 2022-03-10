import {createTheme} from "@mui/material/styles";
import blueGrey from "@mui/material/colors/blueGrey";
import grey from "@mui/material/colors/grey";

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[700]
        },
        secondary: {
            main: grey[300]
        }
    },
})
export default theme;