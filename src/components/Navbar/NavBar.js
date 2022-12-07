import { AppBar, Box, Button, Grid, Toolbar, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideBarDrawer from './SideBarDrawer';
const transitionDuration = 500;

const style = {
    //helper
    marginTop3: {
        marginTop: 3
    },
    root: {
        backgroundColor: (theme) => theme.palette.background.default,
    },
    menuLink: {
        fontSize: "1.2rem",
        marginRight: 5,
        fontWeight: 600,
        cursor: 'pointer',
        "&:hover": {
            color: theme => theme.palette.error.main,
        },
        color: '#fff'
    },
    muiSwitchStyle: {
        marginRight: {
            xs: -3,
            md: 0
        }
    },
    logoContainer: {
        paddingTop: 1.5,
        paddingBottom: 1.5
    },
    imgLogoStyle: {
        cursor: 'pointer',
        "&:hover": {
            transform: "scale3d(1.05, 1.05, 1)"
        },
    },
    imgLogoStyles: {
        cursor: 'pointer',
        width: 100,
        height: 100
    },
    toolbarStyle: {
        padding: {
            xs: 1,
            sm: 1,
            md: 2
        },
        height: 35,
        width: 1300,
        justifyContent: {
            xs: 'space-between',
            sm: 'space-between'
        }
    },
    titleLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 2,
        color: '#fff'
    },
    btnStyle: {
        backgroundColor: 'transparent',
        border: 1,
        borderColor: '#fff',
        color: '#fff',
        fontWeight: 'bold'
    }
}

export default function NavBar() {

    const matchMD = useMediaQuery("(min-width:960px)");

    const [transparent, setTransparent] = useState('transparent');

    const navigate = useNavigate();

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setTransparent('#00498D');
        }
        else {
            setTransparent('transparent');
        }
    };

    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Box component={Grid} container justifyContent="center">
            <Box sx={style.root}>
                <AppBar position="fixed" elevation={0} sx={{
                    backgroundColor: transparent,
                }}>
                    <Grid container justifyContent="center">
                        <Toolbar sx={style.toolbarStyle}>
                            <Box sx={style.logoContainer}>
                                <Typography sx={style.titleLogo} color='textSecondary'>DECISION SUPPORT SYSTEM</Typography>
                            </Box>
                            <Box component="span" sx={{ flexGrow: 1 }} />
                            {!matchMD ?
                                <SideBarDrawer /> :
                                <>
                                    <Link to='/home' style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Typography sx={style.menuLink} color='textSecondary'>HOME</Typography>
                                    </Link>
                                    <Link to='/stem' style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Typography sx={style.menuLink} color='textSecondary'>STEM</Typography>
                                    </Link>
                                    <Link to='/abm' style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Typography sx={style.menuLink} color='textSecondary'>ABM</Typography>
                                    </Link>
                                    <Link to='/humss' style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Typography sx={style.menuLink} color='textSecondary'>HUMSS</Typography>
                                    </Link>
                                    <Link to='/gas' style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Typography sx={style.menuLink} color='textSecondary'>GAS</Typography>
                                    </Link>
                                    <Link to='/tvl' style={{
                                        textDecoration: 'none'
                                    }}>
                                        <Typography sx={style.menuLink} color='textSecondary'>TVL</Typography>
                                    </Link>
                                    <Button variant="contained" sx={style.btnStyle} onClick={() => navigate('/admin/login')}>
                                        Admin
                                    </Button>
                                </>
                            }
                        </Toolbar>
                    </Grid>
                </AppBar>
            </Box>
        </Box>
    )
}
