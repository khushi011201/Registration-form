import React from 'react'
import { AppBar,Box,Toolbar, Typography,Button } from '@mui/material'

const Navbar=()=> {
  return (
    <>
        <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='primary'>
        <Toolbar>
            <Typography variant='h5' component="div" sx={{flexGrow:1}}>
            ShopSphere

            </Typography>

            <Button href="/"  sx={{color:'white', textTransform:'none'}}> 
              Home
            </Button>

            <Button href="contact" sx={{color:'white', textTransform:'none'}}> 
            Contact
            </Button>
            <Button href="login" sx={{color:'white', textTransform:'none'}}> 
            Login/Registartion
            </Button>

        </Toolbar>
     

        </AppBar>
           

        </Box>
    </>
  )
}

export default Navbar
