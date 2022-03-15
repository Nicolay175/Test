import React, {useEffect, useState} from 'react';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import '../../styles/App.css'
import FormRules from "./FormRules";
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactPhoneInput from 'react-phone-input-material-ui'


const FormClient = () => {
    let url, header;
    let textMessage;
    const navigate = useNavigate();

    const { id } = useParams();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [consentRules, setConsentRules] = useState(0);
    const [consentMailing, setConsentMailing] = useState(0);
    const [validationError,setValidationError] = useState({});

    const [open, setOpen] = useState(false);

    if (id) {
        url = `http://localhost:8000/api/clients/${id}`;
        header = "Редактирование клиента";
    }else {
        url = `http://localhost:8000/api/clients`;
        header = "Новый клиент";
    }

    useEffect(()=>{
        fetchClient()
    },[]);

    const fetchClient = async () => {
        if (id) {
            await axios.get(url).then(({data}) => {
                console.log(data)
                setLogin(data.client.login);
                setPassword(data.client.password);
                setDate(data.client.date);
                setPhone(data.client.phone);
                setEmail(data.client.email);
                setConsentRules(data.client.consentRules);
                setConsentMailing(data.client.consentMailing);
            }).catch(({response: {data}}) => {
                Swal.fire({
                    text: "Не смог прочитать запись на стороне сервера",
                    icon: "error"
                })
            })
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


    const createClient = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        if (id) formData.append('_method', 'PATCH');
        formData.append('login', login)
        formData.append('password', password)
        formData.append('date', date)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('consentRules', consentRules)
        formData.append('consentMailing', consentMailing)

        await axios.post(url, formData).then(({data})=>{
            Swal.fire({
                icon:"success",
                confirmButtonText: "Успешно!",
                text:data.message
            })

            navigate("/list")

        }).catch(({response})=>{
            if(response.status===422){
                setValidationError(response.data.errors);
                textMessage = "Ошибка валидации на стороне сервера"
            }else {
                textMessage = response.data.message
            }
            Swal.fire({
                text: textMessage,
                icon: "error",
                confirmButtonText: "Ошибочка вышла!"
            })
        })
    }

    return (
        <Box className='box_text'>
            <Container maxWidth='sm'>
                <form onSubmit={createClient}>
                    <Typography variant={"h5"} align='center' sx={{m:5}}>{ header }</Typography>
                    <TextField
                        autoFocus
                        required
                        label="Login"
                        fullWidth
                        margin="normal"
                        value={login}
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
                        value={password}
                        onChange={(event)=>{setPassword(event.target.value)}}
                    />
                    <TextField
                        required
                        type="date"
                        margin="normal"
                        fullWidth
                        value={date}
                        onChange={(event)=>{setDate(event.target.value)}}
                    />
                    <TextField
                        required
                        sx={{marginBottom:2}}
                        label="Email"
                        margin="normal"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                    <ReactPhoneInput
                        country='ru'
                        label="Телефон"
                        value={phone}
                        onChange={phone => {setPhone(phone)}}
                        component={TextField}
                    />

                    <FormControlLabel style={{marginTop: 2}} control={
                        <Checkbox
                            required
                            checked={Boolean(consentRules)}
                            onChange={(event)=>{setConsentRules(Number(event.target.checked))}}
                        />}
                            label=""
                    />
                    <Link variant="body1" onClick={handleClickOpen} sx={{marginLeft: -2, cursor: "pointer"}}>Согласие с правилами</Link>
                    <FormControlLabel style={{display: "block", marginTop: 2}} control={
                        <Checkbox
                            checked={Boolean(consentMailing)}
                            onChange={(event)=>{setConsentMailing(Number(event.target.checked))}}
                        />
                    }
                        label="Согласие на получение рассылок"
                    />
                    <FormRules open={open} handleClose={handleClose}/>

                    <Button className="button"
                        sx={{marginLeft: 2}}
                        variant="contained"
                        type="submit"
                    >
                        Сохранить
                    </Button>
                    <Button className="button"
                        href={`/list`}
                        variant="contained"
                    >
                        Отмена
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default FormClient;