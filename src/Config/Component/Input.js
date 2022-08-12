import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function MyInput(props) {
    const{label}=props;
  return (
    <>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <TextField label={label} variant="filled" color="success" focused /> 
    </Box>
    </>
  )
}

export default MyInput