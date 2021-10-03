import React from 'react';
import Header from './Header';

import {IconButton, Chip, RadioGroup, FormControlLabel, TextField, Typography, Avatar, Divider, Button, Radio, Grid, Toolbar} from '@mui/material';
import { useState } from 'react';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { theme } from '../theme';
import blankProfile from '../assets/blankProfile.png';
import './EnterInfo.css';
import { styled } from '@mui/material/styles';
const Input = styled('input')({
    display: 'none',
  });
//This is just the design layout. Functionality has to be coded separately.
//I have used Grid extensively for positioning of items (Material UI gid uses flexbox)
//https://mui.com/components/grid/ - read about it here
const EnterInfoPage = () => {

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    return(
        <>
        <Header/>

        <Grid container justifyContent="space-around">
            <Grid item xs={9} sm={8} lg={10}>
            <Toolbar> 
            <Avatar style={{background: theme.palette.secondary.main, marginRight:"5px"}}>
                <Filter3Icon/> </Avatar>
            <Typography align="left" variant="h6" gutterBottom style={{marginTop:"10px"}}>
            회원정보 입력
            </Typography>
            </Toolbar> 
            </Grid>

            <Grid item xs={2} sm={2} lg={1}>
            <Toolbar style={{}}> 
                &bull;&bull;
                <Avatar style={{background: theme.palette.secondary.light }}>
                &bull;
                <Filter4Icon/>
                &bull;
                </Avatar>
            </Toolbar>
            </Grid>
        </Grid>

        <div>
            <Avatar
            alt="Remy Sharp"
            src={blankProfile}
            style={{ width: 130 , height: 130, 
            marginLeft:"auto", marginRight:"auto" }}
            />
        </div>
        {/* The camera button for loading images */}
        <label htmlFor="icon-button-file" style={{ marginLeft:"auto", marginRight:"auto"}}>
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" 
            style={{background: theme.palette.secondary.main,
                color: "white",
            position:"relative", marginLeft:"55%", marginTop:"-35px"}}
            aria-label="upload picture" 
            component="span">
            <PhotoCamera />
            </IconButton>
        </label>
        
        <Grid container justifyContent="center">
            <Grid item style={{marginTop:"1%", width:500, maxWidth: '95%',}}>
                <TextField
                placeholder="이름(닉네임)"
                id="outlined-error-helper-text"
                defaultValue=""
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>

            <Grid item style={{marginTop:"3%", width:500, maxWidth: '95%',}}>
                <TextField
                placeholder="생년월일 8글자"
                id="outlined-error-helper-text"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>

            <Grid item style={{marginTop:"3%", width:500, maxWidth: '95%',}}>
                <TextField
                placeholder="휴대폰번호"
                id="outlined-error-helper-text"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>

            <Grid item style={{marginTop:"3%", width:500, maxWidth: '95%',}}>
                <TextField
                placeholder="이메일"
                id="outlined-error-helper-text"
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>

            <Grid item>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" style={{marginTop:"5px", marginLeft:"auto", marginRight:"auto"}}>
                <FormControlLabel value="female" control={<Radio />} label="여성" 
                style={{marginLeft:"auto", marginRight:"80px"}}/>
                <FormControlLabel value="male" control={<Radio />} label="남성" />
            </RadioGroup>
            </Grid>
            
        </Grid>
        <Divider/>
        <Grid container justifyContent="center" alignItems="center" style={{marginTop:"10px", 
        marginLeft:"auto"}}>
            <Grid item style={{marginTop:"3%", width: 500, maxWidth: '70%', 
            marginRight:"auto", marginLeft:"auto", marginBottom:"1%"}}
            xs={9} sm={9}>
                <TextField
                placeholder="아이디 입력"
                id="outlined-error-helper-text"
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>
            <Grid item xs={3} sm={3}>
            <Button variant="contained"
                style={{ backgroundColor: "#448e62", borderRadius: "20px",
                fontSize: "15px", color: "white", maxWidth: "95%", width:"100%", height:"4em"}}
                > <b> 아이디 확인 </b></Button>
            </Grid>
        </Grid>
        <Divider/>

        <Grid container justifyContent="center" sx={{marginTop:"1em", textAlign:"center", color:"gray"}}>
            <Grid item>
            <Typography
                align="center" variant="h7">
                비밀번호를 6자 이상, 특수 문자를 포함하여 입력하세요
                </Typography>
            </Grid>
        <Grid item style={{marginTop:"2%", width:500, maxWidth: '95%',}}>
                <TextField
                placeholder="비밀번호 입력"
                id="outlined-error-helper-text"
                defaultValue=""
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>

            <Grid item style={{marginTop:"3%", width:500, maxWidth: '95%',}}>
                <TextField
                placeholder="비밀번호 확인"
                id="outlined-error-helper-text"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                size="small"
                fullWidth
                className="inputRounded"
                style={{borderRadius:"30px"}}
                />
            </Grid>
            <Grid item style={{marginTop:"3%", width:500, maxWidth: '95%',}}>
                <Button variant="contained"
                style={{ backgroundColor: "#448e62", borderRadius: "20px",
                fontSize: "15px", color: "white", maxWidth: "95%", width:"100%", 
                height:"3em", marginBottom: "3%"}}
                > <b> 주소 검색 </b>
                </Button>
            </Grid>
        </Grid>
        <Divider/>

        <div style={{ marginLeft: "20px"}} >
        <Typography
            align="left" variant="h6" >
            관심 키워드 (선택)
        </Typography>
        <Chip label="분식" variant="outlined" onDelete={handleDelete} />
        <Chip label="추가하기" variant="outlined" 
         onClick={handleClick}
        style={{ marginLeft: "10px", backgroundColor: "#448e62", 
         color: "white", }}/>
        </div>

        
    </>
    )
};

export default EnterInfoPage;