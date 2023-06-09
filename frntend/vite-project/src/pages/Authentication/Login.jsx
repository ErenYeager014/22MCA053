import React from 'react'
import RegisterForm from '../../Section/RegisterForm'

const Login = () => {
  return (
    <>
    <RegisterForm>
    <Box sx={{
      padding:'1rem', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    }}>
        <TextField name="company Name" label="company Name"/>    
        <TextField name="ownerName" label="ownerName"/>
        <TextField name="rollNo" label="rollNo"/>
        <TextField name="ownerEmail" label="ownerEmail"/>
        <TextField name="accessCode" aria-readonly label="accessCode" value={"Pilfsf"}/>
        <Button variant='contained'>Submit</Button>
    </Box>
    </RegisterForm>
    </>
  )
}

export default Login