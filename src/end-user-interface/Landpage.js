import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { BulbIcon } from "../images/imageList";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from '../images/image1.png'

const style = {
  root: {
    background: (theme) => `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    width: "100vw",
    height: {
      xs: '100%',
      sm: '100%',
      md: '100vh'
    },
    display: "flex",
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: 'row',
    },
    alignItems: "center",
    paddingTop: {
      xs: 5,
      sm: 5,
      md: 0
    },
    paddingBottom: {
      xs: 15,
      sm: 5,
      md: 0
    },
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    maxWidth: 300,
    maxHeight: 400,
  },
  textContainer: {
    width: {
      xs: '80%',
      sm: '70%',
      md: '50%'
    },
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    paddingRight: "10px",
  },
  titleContainer: {
    marginTop: {
      xs: 5,
      sm: 5,
      md: 0,
    }
  },
  titleText: {
    fontSize: {
      xs: 30,
      sm: 40,
      md: 45
    },
    letterSpacing: 1.5,
    fontWeight: 'bold',
  },
  captionContainer: {
    marginTop: {
      xs: 5,
      sm: 5,
      md: 4,
    }
  },
  capstionText: {
    fontSize: 22,
    fontWeight: '550',
  },
  buttonStyle: {
    color: "#000",
    fontSize: {
      xs: 15,
      sm: 15,
      md: 18,
    },
    fontWeight: 600,
    letterSpacing: 1,
    margin: "5px",
    borderRadius: "30px",
    marginTop: 5,
    textTransform: 'none',
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
}

function Landpage() {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/academic-strands`;
    navigate(path);
  };

  return (
    <Box sx={style.root}>
      <Helmet>
        <title>Decision Support System</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      <Box sx={style.container}>
        <Box component={Grid} container justifyContent="center" alignItems="center">
          <Box
            component="img"
            src={BulbIcon}
            alt='Decision Making Icon'
            sx={style.imageStyle}
          />
        </Box>
      </Box>
      <Box sx={style.textContainer}>
        <Grid sx={style.titleContainer}>
          <Typography sx={style.titleText}>
            Deciding which track for you might be confusing.
          </Typography>
        </Grid>
        <Grid sx={style.captionContainer}>
          <Typography sx={style.capstionText}>
            So we will provide a assessment that will lead you to the best track
            that suits for your skills and knowledge.
          </Typography>
        </Grid>
        <Button
          color='secondary'
          variant="contained"
          sx={style.buttonStyle}
          onClick={routeChange}
        >
          Get started
        </Button>
      </Box>
    </Box>
  );
}

export default Landpage;
