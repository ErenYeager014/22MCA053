import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import RegisterForm from '../../Section/RegisterForm'
import { Children } from 'react'

const Register = ({children}) => {
  return (
    <>
    <Container sx={{height:'90vh',display:'grid',justifyContent:'center',alignContent:'center'}}>
    <Paper>
    <Typography varient='h6' sx={{width:'100%',textAlign:'center'}} fontWeight={800}>
          Register
    </Typography>
          {children}
    </Paper>
    </Container>
    </>
  )
}

export default Register