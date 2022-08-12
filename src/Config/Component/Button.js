
import Button from '@mui/material/Button';


import React from 'react'

function Buttons(props) {
    const {label} =props
  return (
    <Button variant="contained">{label}</Button>
  )
}

export default Buttons