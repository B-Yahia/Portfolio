import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import "../../CommunCss.css"
import Logo from '../Logo/Logo'
import "./Footer.css"

function Footer() {
  return (
    <>
        <Grid container className='footer-container border-t section-container' justifyContent="center" alignItems="center">
            <Grid item xs={12}> <div className='footer-logo-container'><div className='footer-logo'><Logo/></div></div></Grid>
            <Grid item>
                <Grid container direction={{sm:"column", md:"row"}}>
                    <Grid item md={6} sm={12}>
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
                        <Typography align='center' variant="caption" className='footer-text'>In order to contact me you can send me a message on my email address yahiabahhous@gmail.com or contact me on one of the social networks</Typography>
                        <Stack direction="row">
                        <svg width="32" height="32" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"/></svg>
                        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                        </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Stack direction="column" justifyContent="center" alignItems="center">
                            <div className='footer-pages-container'>
                                <p className='footer-pages-title'>Pages</p>
                                <p className='footer-pages'>Home</p>
                                <p className='footer-pages'>Projects</p>
                                <p className='footer-pages'>About me</p>
                                <p className='footer-pages'>Contact Me</p>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        <div className="footer-bottom" >
            
                <p className='footer-bottom-text'>Designed by </p><div className='footer-bottom-logo'><Logo/></div>
            
        </div>
    </>
  )
}

export default Footer