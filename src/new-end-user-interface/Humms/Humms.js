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

export default function Humss() {

    const navigate = useNavigate();

    return (
        <Box component={Grid} container justifyContent="center">
            <Helmet>
                <title>Humss</title>
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
                                    }}>HUMSS</Typography>
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
                                    }}>Humanities and Social Science</Typography>
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
                                    }}>HUMSS</Typography>
                                </Box>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold'
                                }}>
                                    HUMSS strand in senior high school is designed to effectively prepare students who seek to pursue a college degree in liberal education. HUMSS courses cover a variety of subjects, looking at the world and its people from various points of view. The learning activities are directed towards the development of critical thinking.
                                </Typography>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold',
                                    marginTop: 3
                                }}>
                                    HUMSS also focuses on developing your oral communication, media and information, and will hone your skills in reading and writing to a professional level. Because the HUMSS strand is intended for those who wish to explore careers in social sciences, this strand will involve a lot of research and presentation, making it a good preparation for their future careers as journalists, lawyers, teachers, politicians, writers, and psychologists.
                                </Typography>
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
                                    }}>College course is under HUMSS strand:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Arts in Psychology </Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Psychology </Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Technical Communication</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Education</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Mass Communication</Typography>
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
                                    }}>List of Career under HUMSS</Typography>
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
                                    }}>Students enrolled in the HUMSS strand in senior high school can lead successful and highly competitive careers in the following professions: </Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Psychologists</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Therapists</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Doctors</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Counselors</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Lawyers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Reporters</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Journalists</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Writers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>College Professors</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Teachers</Typography>
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
                                    }}>Here are some video to understand more what HUMMS is:</Typography>
                                </Box>
                                <Box
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/uOaUaR-8bfA"
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
                                        src="https://www.youtube.com/embed/qmQGqA4VmVw"
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
                                        src="https://www.youtube.com/embed/xny8Y6COJqc"
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
                                        src="https://www.youtube.com/embed/5-6EQnGGe0Q"
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
