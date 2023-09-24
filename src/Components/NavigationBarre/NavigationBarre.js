import { Grid } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import "./NavigationBarre.css"
import "../../CommunCss.css"

function NavigationBarre() {
  return (
    
        <Grid container className='section-container navbar border-b' justifyContent={{ xs:"center" ,md:"space-between"}} alignItems="center">
            <Grid item className='nav-item' xs="auto">
                <Logo />
            </Grid>
            <Grid item className='nav-item'>
                <Menu/>
            </Grid>
        </Grid>
    
  )
}

export default NavigationBarre