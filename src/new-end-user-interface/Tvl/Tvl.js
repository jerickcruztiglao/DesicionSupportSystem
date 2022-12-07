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

export default function Tvl() {

    const navigate = useNavigate();

    return (
        <Box component={Grid} container justifyContent="center">
            <Helmet>
                <title>Tvl</title>
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
                                    }}>TVL</Typography>
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
                                    }}>Technical-Vocational Livelihood </Typography>
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
                                    }}>TVL</Typography>
                                </Box>
                                <Typography sx={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'left',
                                    letterSpacing: 1,
                                    fontWeight: 'bold'
                                }}> The senior high school TVL track is designed for students who wish to start working right after they graduate from senior high school. These vocational courses give students the skills and knowledge they need to get the certifications necessary for work. The TVL track is ideal for those who intend to work abroad as skilled workers.  </Typography>
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
                                    }}>College course is under T.V.L strand:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Computer Science</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Information Systems / Information Technology</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Information Technology Entrepreneurship</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Interactive Entertainment (Game Development)</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Software Technology</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Industrial Technology Major in Automotive</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Industrial Technology Major in Food Technology</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Industrial Technology Major in Drafting Technology</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Industrial Technology Major in Welding Technology</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Bachelor of Science in Home Economics</Typography>
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
                                    }}>List of Career under T.V.L</Typography>
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
                                    }}>Senior high school graduates of the T.V.L can have successful careers as the following:</Typography>
                                </Box>
                                <Box sx={{
                                    marginBottom: 2
                                }}
                                    component={Grid} container justifyContent="flex-start"
                                >
                                    <ul>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Refrigeration and airconditioning servicing</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Electrical installation and maintenance</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Power distribution line construction</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Mechatronics</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Masonry</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Data Encoder</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Programmer</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>System Analyst</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Web Developer</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Game Designer</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Baker</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Barista</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Makeup artist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Barber, stylist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Therapist</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Clerk</Typography>
                                        </li>
                                        <li style={style.listStyles}>
                                            <Typography sx={style.textListStyle}>Tailor</Typography>
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
                                    }}>Here are some video to understand more what T.V.L is:</Typography>
                                </Box>
                                <Box
                                    sx={style.imgStyle}
                                >
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/gXE2tHY0HBM"
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
                                        src="https://www.youtube.com/embed/-5YvUq52BUE"
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
                                        src="https://www.youtube.com/embed/LBtWPvBhzkc"
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
                                        src="https://www.youtube.com/embed/vdA_E-qt1yg"
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
