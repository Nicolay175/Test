import React, {useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Link,
    TextField,
    Typography
} from "@mui/material";
import '../styles/App.css'
import FormRules from "./FormRules";
import {useNavigate} from "react-router-dom";
import axios from 'axios';


const FormCreate = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [validationError,setValidationError] = useState({});


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const createClients = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('login', login)
        formData.append('password', password)
        formData.append('date', date)
        formData.append('email', email)
        formData.append('phone', phone)

        await axios.post(`http://localhost:8000/api/clients`, formData).then(({data})=>{
            navigate("/list")
        }).catch(({response})=>{
            console.log(response)
            if(response.status===422){
                setValidationError(response.data.errors)
            }else{
            }
        })
    }


    return (
        <Box className='box_text'>
            <Container maxWidth='sm'>
                <form onSubmit={createClients}>
                <Typography variant={"h5"} align='center' sx={{m:5}}>Новая запись</Typography>
                <TextField className='text_field'
                    autoFocus
                    required
                    label="Login"
                    fullWidth
                    margin="normal"
                    onChange={(event)=>{setLogin(event.target.value)}}
                />
                <TextField className='text_field'
                    required
                    id="outlined-password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    margin="normal"
                    sx={{mr: 2}}
                    onChange={(event)=>{setPassword(event.target.value)}}
                />
                <TextField className='text_field'
                    required
                    id="outlined-data"
                    type="date"
                    margin="normal"
                    fullWidth
                    sx={{mr:2}}
                    defaultValue=""
                    onChange={(event)=>{setDate(event.target.value)}}
                />
                <TextField className='text_field'
                    required
                    sx={{mr:2}}
                    id="outlined-email"
                    label="Email"
                    margin="normal"
                    type="email"
                    defaultValue=""
                    fullWidth
                    onChange={(event)=>{setEmail(event.target.value)}}
                />
                <TextField className='text_field'
                    required
                    sx={{mr:2}}
                    id="outlined-phone"
                    label="Телефон"
                    type='number'
                    margin="normal"
                    fullWidth
                    defaultValue=""
                    onChange={(event)=>{setPhone(event.target.value)}}
                />

                <FormControlLabel style={{marginTop: 2}} control={<Checkbox />} label="" /><Link variant="body1" onClick={handleClickOpen} sx={{marginLeft: -2, cursor: "pointer"}}>Согласие с правилами</Link>
                <FormControlLabel style={{display: "block", marginTop: 2}} control={<Checkbox />} label="Согласие на получение рассылок" />
                <FormRules open={open} handleClose={handleClose}/>

                <Button className="button"
                    variant="contained"
                    type="submit"
                >
                    Сохранить
                </Button>
                </form>
            </Container>
        </Box>
    );
};

export default FormCreate;