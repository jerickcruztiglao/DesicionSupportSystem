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

export default function Gas() {

    const navigate = useNavigate();

    return (
        <Box component={Grid} container justifyContent="center">
            <Helmet>
                <title>Gas</title>
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
                                    }}>GAS</Typography>
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
                                    }}>General Academic Strand </Typography>
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
                                    }}>GAS</Typography>
                                </Box>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold'
                                }}> General Academic Strand caters students who are not yet sure of what course or degree they want to take in college. This strand was designed so that indecisive learners can proceed with any college program. </Typography>
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
                                    }}>College course is under G.A.S strand:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <Typography sx={{
                                        fontSize: 20,
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>SHS graduates of the G.A.S strand can enroll in the following undergraduate courses:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Multimedia Arts and Sciences</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Fine Arts in Digital Cinema</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Interior Designs</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Physical Education</Typography>
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
                                    }}>List of Career under G.A.S</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <Typography sx={{
                                        fontSize: 20,
                                        color: '#fff',
                                        letterSpacing: 2
                                    }}>Senior high school graduates of the G.A.S can have successful careers as the following:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Educators</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Businessmen</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Lawyers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Professors</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Psychologists</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Doctors</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Writers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Journalists</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Multimedia Designers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Interior Designers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Social Workers</Typography>
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
                                    }}>Here are some video to understand more what G.A.S is:</Typography>
                                </Box>
                                <Box
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/PypnV3aZy-4"
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
                                        src="https://www.youtube.com/embed/EZwJs0qUYFQ"
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
                                        src="https://www.youtube.com/embed/N_P05K11yeY"
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
                                        src="https://www.youtube.com/embed/r4oyREMsDPs"
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
