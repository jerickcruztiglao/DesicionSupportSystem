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

export default function Abm() {

    const navigate = useNavigate();

    return (
        <Box component={Grid} container justifyContent="center">
            <Helmet>
                <title>Abm</title>
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
                                    }}>ABM</Typography>
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
                                    }}>Accountancy, Business, and Management</Typography>
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
                                    }}>ABM</Typography>
                                </Box>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold'
                                }}>
                                    The Accountancy, Business and Management strand marries creativity, mathematical application, and business sense to prepare the best business professionals of tomorrow. Taking ABM subjects in senior high school will introduce students to the concepts of financial management, business management, corporate operations, and accounting. Students who select this route will be prepared for colourful careers as managers, accountants, and business owners. Students who select this route will be prepared for colorful careers as managers, accountants, and business owners. These ABM courses will equip them with the necessary industry know-how and skills to perform well in their professions and run their businesses smoothly.
                                </Typography>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold',
                                    marginTop: 3
                                }}>
                                    Designed to prepare students who are inclined to take college degrees related to business and management programs, taking ABM in senior high school will be about the basic principles of the various functional areas of business such as marketing, finance and accounting, information and technology, and entrepreneurship. The ABM strand is the perfect combination of practical skills and application, as well as shaping senior high school students to adopt the right mindset for crisis management and problem solving on the job and behind their businesses.
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
                                    }}>College course is under ABM strand:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Business Administration </Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Hospitality Management</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Accountancy</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Business Administration Major in Entrepreneurship</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Business Administration Major in Financial Management</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Legal Management</Typography>
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
                                    }}>List of Career under A.B.M</Typography>
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
                                    }}>Students enrolled in the ABM strand in senior high school can lead successful and highly competitive careers in the following professions:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Entrepreneurs</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Advertising Professionals</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Marketing or Sales Representatives</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Accountants</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Account Managers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bank Tellers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Restaurateurs</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Corporate Managers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Retail Managers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Financial Advisers</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Economists</Typography>
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
                                    }}>Here are some video to understand more what A.B.M is:</Typography>
                                </Box>
                                <Box
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/8DwfEqpxK08"
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
                                        src="https://www.youtube.com/embed/NbtnP5Wbwp8"
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
                                        src="https://www.youtube.com/embed/2kXXAorffHw"
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
                                        src="https://www.youtube.com/embed/MVoEqoF8xFU"
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
