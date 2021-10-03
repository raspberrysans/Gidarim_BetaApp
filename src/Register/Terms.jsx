import React from 'react';
import { Typography, ThemeProvider, Avatar, Divider, Button, Radio, CssBaseline, Grid, Toolbar } from  '@mui/material';
import { useState } from 'react';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import { theme } from '../theme';
import './Terms.css';
import Header from './Header';
//This is just the design layout. Functionality has to be coded separately.
const Terms = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ width: '100%'}}>
            
        <Header/>
        </div>
        <main>
            <Grid container justifyContent="space-around">
                <Grid item xs={7} lg={10}>
                <Toolbar> 
                <Avatar style={{background: theme.palette.secondary.main, marginRight:"5px"}}>
                    <Filter1Icon/> </Avatar>
                <Typography align="left" variant="h6" gutterBottom style={{marginTop:"1em", paddingBottom:"5px"}}>
                    약관동의</Typography>
                    </Toolbar> 
                </Grid>
                <Grid item xs={5} sm={4} lg={1}>
                <Toolbar style={{}}> 
                    &bull;&bull;
                    <Avatar style={{background: theme.palette.secondary.light, float:"right",}}>
                    &bull;
                    <Filter2Icon/> 
                    &bull;
                    </Avatar>
                    &bull;&bull;
                    <Avatar style={{background: theme.palette.secondary.light, }}>
                    &bull;
                    <Filter3Icon/>
                    &bull;
                    </Avatar>
                    &bull;&bull;
                    <Avatar style={{background: theme.palette.secondary.light }}>
                    &bull;
                    <Filter4Icon/>
                    &bull;
                    </Avatar>
                    &bull;&bull;
                </Toolbar>

                </Grid>
            </Grid>

            <Grid container justifyContent="center"
            spacing={0}
            alignItems="center">

            <div className="terms">
            <p className="text"> 
            A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
            Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.
            </p>
            </div>
            </Grid>

            <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item  >
                   <b> 개인정보수집 및 활용에 동의합니다. </b>
                </Grid>
                <Grid item >
                    <Radio color="primary" />
                </Grid>
            </Grid>
            
            <Grid container justifyContent="center"
            spacing={0}
            alignItems="center">

            <div className="terms">
            <p className="text"> 
            A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
            Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.
            </p>
            </div>
        
            </Grid>

            <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item  >
                   <b> 개인정보수집 및 활용에 동의합니다. </b>
                </Grid>
                <Grid item >
                    <Radio color="primary" />
                </Grid>
            </Grid>

            <Divider />

            <Grid container justifyContent="flex-end" alignItems="center">
                <Grid item  >
                   <b> 전체 동의 </b>
                </Grid>
                <Grid item >
                    <Radio color="primary" />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center"
            style={{marginTop:"5rem"}}>
            <Button variant="contained" className="next-button"
            style={{ backgroundColor: "#e7e2d4", borderRadius: "20px",
            fontSize: "18px", color: "#448e62"}}
            > <b> 다음 </b></Button>
            </Grid>

        </main>
        
        </ThemeProvider>
        </>
    )
}
export default Terms;