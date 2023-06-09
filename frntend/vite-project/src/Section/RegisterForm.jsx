import { Box, TextField,Button} from '@mui/material'
import React from 'react'

const RegisterForm = () => {
  return (
    <><form>
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
      </form>
    </>
  )
}

export default RegisterForm