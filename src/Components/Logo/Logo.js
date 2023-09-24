import { Stack } from '@mui/material'
import React from 'react'
import "./Logo.css"
import "../../CommunCss.css"

function Logo() {
  return (
    <div className='neumo logo-container'>
        <Stack direction="row" className='logo'>
        <Stack direction="column" className='logo-part1' justifyContent="center" alignItems="center" >
            <p className='logo-part1-text'>The</p><p className='logo-part1-text'>FullStack</p>
        </Stack>
        <Stack className='logo-part2' justifyContent="center" alignItems="center">
            <p className='logo-part2-text'>Guy</p>    
        </Stack>
        </Stack>        
    </div>
  )
}

export default Logo;