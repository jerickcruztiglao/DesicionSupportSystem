import React from "react";
import {
  Box,
  Button,
  Typography,
  Tab,
  Avatar,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import {
  ABMIcon,
  GASIcon,
  HUMMSIcon,
  STEMIcon,
  TECHVOCIcon,
} from "../images/imageList";
import DescriptionRecords from "../description.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from '../images/image1.png'

const style = {
  section1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 1500,
  },
  imageStyle: {
    width: {
      xs: 100,
      sm: 100,
      md: 150,
    },
    height: {
      xs: 100,
      sm: 100,
      md: 150,
    },
  },
  textTrack: {
    color: "#000",
    fontSize: {
      xs: 25,
      sm: 30,
      md: 35,
    },
    fontWeight: 'bold'
  },
  tabPanelTitle: {
    fontSize: {
      xs: 30,
      sm: 35,
      md: 45,
    },
    fontWeight: "600",
    letterSpacing: 1,
  },
  tabPanelDesc: {
    fontSize: {
      xs: 25,
      sm: 30,
      md: 40,
    },
    letterSpacing: 0.5,
  },
  root: {
    background: (theme) =>
      `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    height: {
      xs: "100%",
      sm: "100%",
      md: "100%",
    },
    width: "100%",
    paddingBottom: {
      xs: 10,
      sm: 20,
      md: 10,
    },
  },
  headerContainer: {
    width: "50%",
    height: 80,
    alignItems: "center",
  },
  arrowIconStyle: {
    fontSize: {
      xs: 30,
      sm: 40,
      md: 50,
    },
    color: "#fff",
  },
  subHeaderContainer: {
    width: "50%",
    alignItems: "center",
  },
  btnAdmin: {
    color: "#000",
    fontSize: {
      xs: 10,
      sm: 14,
      md: 24,
    },
    marginTop: "5px",
    display: "block",
    textTransform: 'none',
    paddingTop: 0.5,
    paddingBottom: 0.5,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    borderRadius: "30px",
  },
  tabListStyle: {
    borderBottom: 3,
    borderColor: "divider",
    height: {
      xs: 175,
      sm: 200,
      md: 250,
    },
    maxWidth: {
      xs: 300,
      sm: 600,
      md: 1600,
    },
  },
  tabStyle: {
    display: "flex",
    flexDirection: "column",
    width: 250,
  },
  tabPanelMargin: {
    marginTop: {
      xs: 0,
      sm: 5,
      md: 10,
    },
  },
  btnStyle: {
    color: "#000",
    fontSize: {
      xs: 15,
      sm: 20,
      md: 24,
    },
    display: "block",
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    borderRadius: "30px",
    marginTop: 5,
    marginBottom: 5,
  },
};

function AcademicTracks() {
  const theme = useTheme();
  const [value, setValue] = React.useState("0");

  const matchMD = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();

  return (
    <Box component={Grid} container justifyContent='center' sx={style.root}>
      <Helmet>
        <title>Academic strands</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      <Box sx={style.section1}>
        <Box component={Grid} container justifyContent='space-between' style={{ padding: 5 }}>
          <Box component={Grid} container sx={style.headerContainer}>
            <IconButton onClick={() => navigate("/home")}>
              <ArrowBackIcon sx={style.arrowIconStyle} />
            </IconButton>
          </Box>
          <Box
            component={Grid}
            container
            justifyContent='flex-end'
            style={style.subHeaderContainer}
          >
            <Button
              variant='contained'
              color='secondary'
              sx={style.btnAdmin}
              onClick={() => navigate("/admin/login")}
            >
              Admin
            </Button>
          </Box>
        </Box>
        <Box
          component={Grid}
          container
          justifyContent='center'
          sx={{ marginTop: 5 }}
        >
          <TabContext value={value}>
            <TabList
              variant={matchMD ? "fullWidth" : "scrollable"}
              scrollButtons='auto'
              onChange={handleChange}
              aria-label='full width tabs example'
              sx={style.tabListStyle}
            >
              <Tab
                label={<Typography sx={style.textTrack}>ABM</Typography>}
                value={"0"}
                icon={<Avatar src={ABMIcon} sx={style.imageStyle} />}
                sx={style.tabStyle}
              />
              <Tab
                label={<Typography sx={style.textTrack}>STEM</Typography>}
                value={"1"}
                icon={<Avatar src={STEMIcon} sx={style.imageStyle} />}
                sx={style.tabStyle}
              />
              <Tab
                label={<Typography sx={style.textTrack}>HUMMS</Typography>}
                value={"2"}
                icon={<Avatar src={HUMMSIcon} sx={style.imageStyle} />}
                sx={style.tabStyle}
              />
              <Tab
                label={<Typography sx={style.textTrack}>TVL</Typography>}
                value={"3"}
                icon={<Avatar src={TECHVOCIcon} sx={style.imageStyle} />}
                sx={style.tabStyle}
              />
              <Tab
                label={<Typography sx={style.textTrack}>GAS</Typography>}
                value={"4"}
                icon={<Avatar src={GASIcon} sx={style.imageStyle} />}
                sx={style.tabStyle}
              />
            </TabList>
            <Box sx={style.tabPanelMargin}>
              <TabPanel value='0'>
                <Typography sx={style.tabPanelTitle}>
                  {DescriptionRecords[0].title}
                </Typography>
                <Typography sx={style.tabPanelDesc}>
                  {DescriptionRecords[0].description}
                </Typography>
              </TabPanel>
              <TabPanel value='1'>
                <Typography sx={style.tabPanelTitle}>
                  {DescriptionRecords[1].title}
                </Typography>
                <Typography sx={style.tabPanelDesc}>
                  {DescriptionRecords[1].description}
                </Typography>
              </TabPanel>
              <TabPanel value='2'>
                <Typography sx={style.tabPanelTitle}>
                  {DescriptionRecords[2].title}
                </Typography>
                <Typography sx={style.tabPanelDesc}>
                  {DescriptionRecords[2].description}
                </Typography>
              </TabPanel>
              <TabPanel value='3'>
                <Typography sx={style.tabPanelTitle}>
                  {DescriptionRecords[3].title}
                </Typography>
                <Typography sx={style.tabPanelDesc}>
                  {DescriptionRecords[3].description}
                </Typography>
              </TabPanel>
              <TabPanel value='4'>
                <Typography sx={style.tabPanelTitle}>
                  {DescriptionRecords[4].title}
                </Typography>
                <Typography sx={style.tabPanelDesc}>
                  {DescriptionRecords[4].description}
                </Typography>
              </TabPanel>
            </Box>
          </TabContext>
          <Button
            variant='contained'
            color='secondary'
            sx={style.btnStyle}
            onClick={() => navigate("/assessment")}
          >
            Take Assessment
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AcademicTracks;
