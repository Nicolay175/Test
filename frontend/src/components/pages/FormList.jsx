import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container, Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import axios from 'axios';

const FormList = () => {
    const [clients, setClients] = useState([])

    useEffect(()=>{
        fetchClients()
    })

    const fetchClients = async () => {
        await axios.get(`http://localhost:8000/api/clients`).then(({data})=>{
            setClients(data)
        })
    }
    const deleteClient = async (id) => {
        console.log(id)
        await axios.delete(`http://localhost:8000/api/clients/${id}`).then(({data})=>{
            fetchClients()
        }).catch(({response:{data}})=>{
        })
    }

    return (
        <Box className='box_text'>
            <Container maxWidth='md'>
                <TableContainer component={Paper}>
                    <Typography variant={"h5"} align='center' sx={{m:5}}>Информация о пользователях</Typography>
                    <Button sx={{float: "right",  marginRight: 7}} variant="outlined" href="/clients/create">Новая запись</Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Login</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell align="center">Действия</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                clients.length > 0 && (
                                    clients.map((row, key)=>(
                                        <TableRow key={key}>
                                            <TableCell>{row.login}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.phone}</TableCell>
                                            <TableCell align="center">
                                                <Button sx={{marginRight: 1}} variant="outlined">Редактировать</Button>
                                                <Button color="warning" variant="outlined" onClick={()=>deleteClient(row.id)}>Удалить</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))
                               )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
};

export default FormList;