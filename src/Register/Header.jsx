import React from 'react';
import { Typography,  AppBar, Toolbar } from  '@material-ui/core';
import { theme } from '../theme';

const Header = () => {
    return(
        <AppBar position="static" elevation={0}
        style={{ 
        background: theme.palette.primary.main,
        }}
        >
        <Toolbar  style={{  }}>
            <Typography align='center'  variant="h6" 
            style={{width: "100%", alignItems: "center", fontWeight: "bold",}}>
                회원가입
            </Typography>
        </Toolbar>
        </AppBar>
    )
}
export default Header;