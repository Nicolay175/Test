import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import axios from 'axios';
import Swal from "sweetalert2";

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
        const isConfirm = await Swal.fire({
            title: 'Точно?',
            text: "Вы хотите грохнуть енту запись!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да, грохнуть!',
            cancelButtonText: 'Не надо!'
        }).then((result) => {
            return result.isConfirmed
        });
        if(!isConfirm){
            return;
        }
        await axios.delete(`http://localhost:8000/api/clients/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                confirmButtonText: "Успешно!",
                text:data.message
            })
            fetchClients()
        }).catch(({response:{data}})=> {
            Swal.fire({
                text: data.message,
                icon: "error",
                confirmButtonText: "Ошибочка вышла!"
            })
        })
    }

    return (
        <Box className='box_text'>
            <Container maxWidth='md'>
                <TableContainer >
                    <Typography variant={"h5"} align='center' sx={{m:5}}>Информация о пользователях</Typography>
                    <Button sx={{float: "right",  marginRight: 9}} variant="outlined" href="/clients/client">Новая запись</Button>
                    <Table >
                        <TableHead>
                            <TableRow >
                                <TableCell>Login</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Id</TableCell>
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
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell align="center">
                                                <Button sx={{marginRight: 1}} variant="outlined" href="/client/${row.id}">Изменить</Button>
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