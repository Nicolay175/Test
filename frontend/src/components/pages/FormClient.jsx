import React, {useState} from 'react';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import '../styles/App.css'
import FormRules from "./FormRules";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';


const FormClient = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [consentRules, setConsentRules] = useState("0");
    const [consentMailing, setConsentMailing] = useState("0");
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
        formData.append('consentRules', consentRules)
        formData.append('consentMailing', consentMailing)

        await axios.post(`http://localhost:8000/api/clients`, formData).then(({data})=>{
            Swal.fire({
                icon:"success",
                confirmButtonText: "Успешно!",
                text:data.message
            })

            navigate("/list")

        }).catch(({response})=>{
            if(response.status===422){
                setValidationError(response.data.errors);
            }else{
                Swal.fire({
                    text:response.data.message,
                    icon:"error",
                    confirmButtonText: "Ошибочка вышла!"
                })
            }
        })
    }

    return (
        <Box className='box_text'>
            <Container maxWidth='sm'>
                <form onSubmit={createClients}>
                    <Typography variant={"h5"} align='center' sx={{m:5}}>Новая запись</Typography>
                    <TextField
                        autoFocus
                        required
                        label="Login"
                        fullWidth
                        margin="normal"
                        onChange={(event)=>{setLogin(event.target.value)}}
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        margin="normal"
                        sx={{mr: 2}}
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                    <TextField
                        required
                        type="date"
                        margin="normal"
                        fullWidth
                        sx={{mr:2}}
                        defaultValue=""
                        onChange={(event)=>{setDate(event.target.value)}}
                    />
                    <TextField
                        required
                        sx={{mr:2}}
                        label="Email"
                        margin="normal"
                        type="email"
                        defaultValue=""
                        fullWidth
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                    <TextField
                        required
                        sx={{mr:2}}
                        label="Телефон"
                        type='tel'
                        margin="normal"
                        fullWidth
                        defaultValue=""
                        onChange={(event)=>{setPhone(event.target.value)}}
                    />

                    <FormControlLabel style={{marginTop: 2}} control={
                        <Checkbox required onChange={(event)=>{setConsentRules(Number(event.target.checked))}}  />}
                        label="" />
                        <Link variant="body1" onClick={handleClickOpen} sx={{marginLeft: -2, cursor: "pointer"}}>Согласие с правилами</Link>
                    <FormControlLabel style={{display: "block", marginTop: 2}} control=
                        {<Checkbox onChange={(event)=>{setConsentMailing(Number(event.target.checked))}}/>}
                        label="Согласие на получение рассылок" />
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

export default FormClient;