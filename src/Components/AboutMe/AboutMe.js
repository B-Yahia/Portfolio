import React from 'react'
import {Grid, Paper} from '@mui/material'
import './AboutMe.css'
import "../../CommunCss.css"

function AboutMe() {
  return (
    <div>
        <Grid container justifyContent='center'
        alignItems='center'
        className='about-section'
        >
            <Grid><p className='title neumo1'>About me</p></Grid>
            <Grid className='container-text'>
                <Paper >
                    
                    <p className='abou-text'>
                    My name is Yahya and I am a React JS / Java developer. My native language is Arabic, but I also speak a very good French and English. 
                    </p>
                    <p className='abou-text'>
                    Having studied at the Estonian University of applied science, I have completed my studies in the field of software development. I chose Estonia to study IT as I strongly believe that this country is advanced in IT and provides many opportunities. Furthermore,
                    </p>
                    <p className='abou-text'>
                    In my work background, I have experience in Technical Support and Online Business Development. Also, I am currently working in financial structures as an AML/KYC agent.
                    </p>
                    <p className='abou-text'>
                    To know more you can contact me via the form in the footer.
                    </p>
                </Paper>
            </Grid>
        </Grid>
    </div>
  )
}

export default AboutMe