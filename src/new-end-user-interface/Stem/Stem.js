import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import logo from '../../images/image1.png'
import Image from '../../images/homeimage3.jpg'
import NavBar from '../../components/Navbar/NavBar'
import { useNavigate } from 'react-router-dom'


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
        paddingBottom: 20
    },
    buttonStyle: {
        width: "100%",
        border: 1,
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    secondWrapper: {
        width: "100%",
        background: `linear-gradient(to bottom right,#0052A2, #00498D)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: 5,
        paddingBottom: 5
    },
    thirdWrapper: {
        width: "100%",
        background: `linear-gradient(to bottom right,#696969, #7D7D7D)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: 5,
        paddingBottom: 5
    },
    listStyles: {
        color: 'white',
        listStyle: 'square',
    },
    textListStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    imgStyle: {
        width: {
            xs: 300,
            sm: 400,
            md: 500,
        },
        margin: 2,
        height: 400
    },
    btnStyle: {
        margin: 2,
        width: '60%',
        backgroundColor: 'transparent',
        border: 1,
        borderColor: '#fff',
        color: '#fff',
        fontWeight: 'bold'
    }
}

export default function Stem() {

    const navigate = useNavigate();

    return (
        <Box component={Grid} container justifyContent="center">
            <Helmet>
                <title>Stem</title>
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
                                padding: 2,
                                maxWidth: 800,
                                flexDirection: 'row'
                            }}>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="center"
                                >
                                    <Typography sx={{
                                        fontSize: 30,
                                        fontWeight: 'bolder',
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>STEM</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="center"
                                >
                                    <Typography sx={{
                                        color: '#fff',
                                        fontSize: 25,
                                        textAlign: 'center'
                                    }}> Science, Technology, Engineering, and Mathematics</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={style.secondWrapper}>
                <Grid container justifyContent="center">
                    <Box sx={{
                        width: 1300
                    }}>
                        <Grid container justifyContent="center">
                            <Box component={Grid} container justifyContent="center" alignContent="center" alignItems="center" sx={{
                                padding: 2,
                                maxWidth: 1200,
                                flexDirection: 'row'
                            }}>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="center"
                                >
                                    <Typography sx={{
                                        fontSize: 30,
                                        fontWeight: 'bolder',
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>STEM</Typography>
                                </Box>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold'
                                }}> Designed to prepare students who express keen interest in taking college degrees focused on Science, Technology, Engineering, and Mathematics (STEM), senior high school students will be exposed to learning activities that will hone their knowledge and skills in analyzing data, understanding real-world impacts, and conducting research. </Typography>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={style.thirdWrapper}>
                <Grid container justifyContent="center">
                    <Box sx={{
                        width: 1300
                    }}>
                        <Grid container justifyContent="center">
                            <Box component={Grid} container justifyContent="center" alignContent="center" alignItems="center" sx={{
                                padding: 2,
                                maxWidth: 1200,
                                flexDirection: 'row'
                            }}>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <Typography sx={{
                                        fontSize: 30,
                                        fontWeight: 'bolder',
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>College course is under STEM strand:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Engineering</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Computer Science / Data Science</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Information Technology / Information Systems</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Mathematics / Applied Mathematics</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Statistics</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Architecture</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Health Sciences / Life Sciences</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Applied Physics</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Food Technology</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Biology / Biochemistry / Chemistry</Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={style.secondWrapper}>
                <Grid container justifyContent="center">
                    <Box sx={{
                        width: 1300
                    }}>
                        <Grid container justifyContent="center">
                            <Box component={Grid} container justifyContent="center" alignContent="center" alignItems="center" sx={{
                                padding: 2,
                                maxWidth: 1200,
                                flexDirection: 'row'
                            }}>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <Typography sx={{
                                        fontSize: 30,
                                        fontWeight: 'bolder',
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>List of Career under S.T.E.M</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <Typography sx={{
                                        fontSize: 18,
                                        fontWeight: 'bolder',
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>Students enrolled in the ABM strand in senior high school can lead successful and highly competitive careers in the following professions: </Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Pilot</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Architect</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Astrophysicist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Biologist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Chemist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Industrial Engineer</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Chemical Engineer</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Dentist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Nutritionist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Doctor</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Marine Engineer</Typography>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={style.thirdWrapper}>
                <Grid container justifyContent="center">
                    <Box sx={{
                        width: 1300
                    }}>
                        <Grid container justifyContent="center">
                            <Box component={Grid} container justifyContent="center" alignContent="center" alignItems="center" sx={{
                                padding: 2,
                                maxWidth: 1200,
                                flexDirection: 'row'
                            }}>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <Typography sx={{
                                        fontSize: 30,
                                        fontWeight: 'bolder',
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>Here are some video to understand more what S.T.EM is:</Typography>
                                </Box>
                                <Box
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/aru1erZHltU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </Box>
                                <Box
                                    alt="html"
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/LVjJEYYC3Us"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </Box>
                                <Box
                                    alt="html"
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/CmCyoBXtILs"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </Box>
                                <Box
                                    alt="html"
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/fH5iLx_jCUk"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                    />
                                </Box>
                            </Box>
                            {/* <Box component={Grid} justifyContent="space-between">
                                <Button variant="contained" sx={style.btnStyle}>
                                    Home
                                </Button>
                                <Button variant="contained" sx={style.btnStyle}>
                                    Abm
                                </Button>
                                <Button variant="contained" sx={style.btnStyle}>
                                    Humms
                                </Button>
                                <Button variant="contained" sx={style.btnStyle}>
                                    Gas
                                </Button>
                                <Button variant="contained" sx={style.btnStyle}>
                                    Tvl
                                </Button>
                            </Box> */}
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={style.secondWrapper}>
                <Grid container justifyContent="center">
                    <Box sx={{
                        width: 1300
                    }}>
                        <Grid container justifyContent="center">
                            <Button variant="contained" sx={style.btnStyle} onClick={() => navigate('/assessment')}>
                                Take Assessment
                            </Button>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}
