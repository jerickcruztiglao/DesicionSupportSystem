import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { Helmet } from "react-helmet";
import NavBar from '../../components/Navbar/NavBar';
import logo from '../../images/image1.png'
import Image from '../../images/homeimage3.jpg'
import { useNavigate } from 'react-router-dom';

const style = {
    root: {
        backgroundColor: (theme) => theme.palette.background.default,
        width: '100%',
    },
    HeardeWraper: {
        width: "100%",
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: 25,
        paddingBottom: 30
    },
    buttonStyle: {
        width: "100%",
        border: 1,
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    }
}


export default function Home() {

    const navigate = useNavigate();

    return (
        <Box component={Grid} container justifyContent="center">
            <Helmet>
                <title>Decision Support System</title>
                <link rel="Decision Support Icon" href={logo} />
            </Helmet>
            <Box sx={style.HeardeWraper}>
                <Grid container justifyContent="center">
                    <Box sx={{
                        width: 1300
                    }}>
                        <NavBar />
                        <Grid container justifyContent="center">
                            <Box component={Grid} container justifyContent="center" alignContent="center" alignItems="center" sx={{
                                padding: 4,
                                marginTop: 2,
                                maxWidth: 800
                            }}>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}> A DECISION SUPPORT SYSTEM IN GUIDING INCOMING SENIOR HIGH SCHOOL IN CHOOSING SPECIALIZATION TRACK</Typography>
                            </Box>
                        </Grid>
                        <Grid container justifyContent="center">
                            <Box component={Grid} container justifyContent="center" alignContent="center" alignItems="center" sx={{
                                padding: 4,
                                marginTop: 7,
                                maxWidth: 900
                            }}>
                                <Button variant="contained" sx={style.buttonStyle} onClick={() => navigate('/stem')}>
                                    Stem
                                </Button>
                                <Button variant="contained" sx={style.buttonStyle} onClick={() => navigate('/abm')}>
                                    Abm
                                </Button>
                                <Button variant="contained" sx={style.buttonStyle} onClick={() => navigate('/humss')}>
                                    Humss
                                </Button>
                                <Button variant="contained" sx={style.buttonStyle} onClick={() => navigate('/gas')}>
                                    Gas
                                </Button>
                                <Button variant="contained" sx={style.buttonStyle} onClick={() => navigate('/tvl')}>
                                    Tvl
                                </Button>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}
