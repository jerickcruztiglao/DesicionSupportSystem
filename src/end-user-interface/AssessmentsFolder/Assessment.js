import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Grid,
  useMediaQuery,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import QuestionareUI from "./QuestionareUI";
import { db } from "../../utils/firebase";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import LoadingButton from '@mui/lab/LoadingButton';
import { Helmet } from "react-helmet";
import logo from '../../images/image1.png';
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TablePagination from "@mui/material/TablePagination";
import Timer from "./Timer";
const style = {
  section1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 1500,
  },
  root: {
    background: (theme) =>
      `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    height: "100%",
    width: "100%",
    paddingBottom: {
      xs: 10,
      sm: 20,
      md: 20,
    },
  },
  arrowIconStyle: {
    fontSize: {
      xs: 30,
      sm: 40,
      md: 50,
    },
    color: "#fff",
  },
  container: {
    backgroundColor: (theme) => `${theme.palette.secondary.main}`,
    marginTop: 5,
    borderRadius: 1,
    maxWidth: {
      xs: 300,
      sm: 700,
      md: 1200,
    },
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textFieldStyle: {
    width: {
      xs: 240,
      sm: 250,
      md: 350,
    },
    margin: 1,

    borderRadius: 1,
  },
  titleStyle: {
    textAlign: "center",
    paddingTop: "30px",
    fontSize: {
      xs: 35,
      sm: 40,
      md: 45,
    },
    letterSpacing: 1,
    fontWeight: 'bolder'
  },
  questionareStyle: {
    borderRadius: 1,
    width: {
      xs: 280,
      sm: 700,
      md: 1200,
    },
  },
  footer: {
    flex: "20%",
    display: "flex",
    justifyContent: "center",
    marginTop: 5,
  },
  button: {
    width: 130,
    height: 60,
    backgroundColor: "blue",
    fontWeight: "bold",
    color: "#ffff",
    border: "0 none",
    borderRadius: 1,
    cursor: "pointer",
    padding: "10px 5px",
    margin: "5px",
    fontSize: 20,
  },
  buttonStyle: {
    m: 1,
    width: {
      xs: "30ch",
      sm: "35ch",
      md: "35ch",
    },
    height: "6.5ch",
    marginTop: 4,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  progressbar: {
    width: "100%",
    height: "10px",
    backgroundColor: "white",
  },
  progressbarContainer: {
    width: "33.3%",
    height: "100%",
    backgroundColor: "rgb(98, 0, 255)",
  },
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Assessment() {
  const [loading, setLoading] = useState(false)
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    average: 0,
    sex: "",
    age: 0,
    currentID: "",
  });
  const [show, setShow] = useState(false);
  const [qSets, setQSets] = React.useState([]);
  const [idSets, setIdSets] = useState([]);
  const [allAns, setAllAns] = useState([]);
  const [studID, setStudID] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [over, setOver] = useState(0);
  qSets.sort((a, b) => (a.id < b.id ? -1 : 1));
  const emptyRows =
    page >= 0 ? Math.max(0, (1 + page) * rowsPerPage - qSets.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (prop) => (event) => {
    if (prop === "name") {
      const result = event.target.value.replace(/[^a-z, " "]/gi, '');
      setUserInfo({ ...userInfo, name: result });
    } else {
      setUserInfo({ ...userInfo, [prop]: event.target.value });
    }


  };

  const handleSubmitInfo = async () => {
    setLoading(true);
    if (
      userInfo.name === "" ||
      userInfo.average === "" ||
      userInfo.sex === "" ||
      userInfo.age === ""
    ) {
      alert("Somefields are empty!");
      setLoading(false);
    } else if (userInfo.average < 75) {
      setLoading(false);
    }
    else if (userInfo.average > 100) {
      alert("Average grade input is above the limit.");
      setLoading(false);
    }
    else {
      await addDoc(collection(db, "Students"), {
        name: userInfo.name,
        average: userInfo.average,
        sex: userInfo.sex,
        age: userInfo.age,
      }).then((docRef) => {
        setUserInfo({ ...userInfo, currentID: docRef.id });
        setStudID(docRef.id)
        setLoading(false);
      });
      setShow(true);
    }
  };

  useEffect(() => {
    if (userInfo.average >= 75 && userInfo.average < 85) {
      const q = query(collection(db, "Questions"), where('strand', '!=', "STEM"));
      onSnapshot(q, (querySnapshot) => {
        const data = [];
        const id = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          })
          id.push({
            id: doc.id
          })
        });
        setIdSets(id);
        setQSets(data);
        setOver(querySnapshot.size)
      })
    }
    else {
      const q = query(collection(db, "Questions"));
      onSnapshot(q, (querySnapshot) => {
        const data = [];
        const id = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          })
          id.push({
            id: doc.id
          })
        });
        setIdSets(id);
        setQSets(data);
        setOver(querySnapshot.size)
      })
    }
  }, [navigate, userInfo.average]);


  useEffect(() => {
    idSets.forEach((data) => {
      if (studID !== "") {
        const ref = query(collection(db, "Students", studID, "Answers"))
        onSnapshot(ref, (querySnapshot) => {
          const ans = [];
          querySnapshot.forEach((doc) => {
            ans.push({
              id: doc.id,
              data: doc.data(),
            })
          });
          setAllAns(ans);
        })
      }
    })
  }, [idSets, navigate, studID])
  return (
    <Box component={Grid} container justifyContent='center' sx={style.root}>
      <Helmet>
        <title>Assessment</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      <Box sx={style.section1}>
        <Box component={Grid} container justifyContent='flex-start'>
          <Box component={Grid} container sx={style.headerContainer}>
            <IconButton onClick={() => navigate("/academic-strands")}>
              <ArrowBackIcon sx={style.arrowIconStyle} />
            </IconButton>
          </Box>
        </Box>
        <Typography sx={style.titleStyle}>Assessment</Typography>
        <Box component={Grid} container sx={style.container}>
          <Grid
            container
            justifyContent={matchMD ? "space-between" : "center"}
            alignContent='center'
          >
            <Box>
              <TextField
                id='outlined-basic'
                placeholder='Name'
                variant='outlined'
                autoComplete='off'
                value={userInfo.name}
                disabled={show ? true : false}
                onChange={handleChange("name")}
                sx={style.textFieldStyle}
                inputProps={{
                  sx: {
                    color: 'black',
                    fontWeight: 'bold',
                    backgroundColor: "white",
                    borderRadius: 1,
                  }
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmitInfo()}
              />
            </Box>
            <Box>
              <FormControl sx={{
                color: 'black',
                fontWeight: 'bold',
                backgroundColor: "white",
                borderRadius: 1,
                justifyContent: matchMD ? "space-between" : "center",
                width: {
                  xs: 240,
                  sm: 250,
                  md: 350,
                },
                margin: 1,
              }}>
                <RadioGroup
                  name="radio-buttons-group"
                  onChange={handleChange("sex")}
                  row={matchMD ? true : false}
                >
                  <Typography sx={{ padding: 2, fontWeight: 500, letterSpacing: 1 }}>Sex :</Typography>
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            container
            justifyContent={matchMD ? "space-between" : "center"}
            alignContent='center'
          >
            <Box>
              <TextField
                id='outlined-basic'
                placeholder='Average Grade'
                type='number'
                variant='outlined'
                autoComplete='off'
                value={userInfo.average === 0 ? "" : userInfo.average}
                disabled={show ? true : false}
                onChange={handleChange("average")}
                sx={style.textFieldStyle}
                inputProps={{
                  sx: {
                    color: 'black',
                    fontWeight: 'bold',
                    backgroundColor: "white",
                    borderRadius: 1,
                    '&[type=number]': {
                      '-moz-appearance': 'textfield',
                    },
                    '&::-webkit-outer-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                    '&::-webkit-inner-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                  }
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmitInfo()}
              />
            </Box>
            <Box>
              <TextField
                id='outlined-basic'
                placeholder='Age'
                type='number'
                variant='outlined'
                autoComplete='off'
                value={userInfo.age === 0 ? "" : userInfo.age}
                onChange={handleChange("age")}
                disabled={show ? true : false}
                sx={style.textFieldStyle}
                inputProps={{
                  sx: {
                    color: 'black',
                    fontWeight: 'bold',
                    backgroundColor: "white",
                    borderRadius: 1,
                    '&[type=number]': {
                      '-moz-appearance': 'textfield',
                    },
                    '&::-webkit-outer-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                    '&::-webkit-inner-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                  }
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmitInfo()}
              />
            </Box>
          </Grid>
          {show ? (
            <Box />
          ) : (
            <LoadingButton
              loading={loading}
              variant="contained"
              color='primary'
              onClick={handleSubmitInfo}
              sx={style.buttonStyle}
            >
              Submit Info to Start
            </LoadingButton>
          )}
        </Box>
        <Box component={Grid} container sx={style.container}>
          <Typography sx={{ fontSize: 32 }}>Please <b style={{ color: 'red', fontWeight: 700 }}>DO NOT</b> reload the page while you are taking the assessment.</Typography>
          <Typography sx={{ fontSize: 32 }}>And if the <b style={{ color: 'red', fontWeight: 700 }}>TIME LIMIT</b> ends your answers will be submited directly.</Typography>
          {userInfo.average >= 75 && userInfo.average < 85 ?
            <Typography sx={{ fontSize: 32, textAlign: 'center' }}>NOTE: You cannot answer in the STEM strand; instead you can only answer in ABM, TVL, GAS, and HUMMS.</Typography> : ""}
          {userInfo.average > 0 && userInfo.average < 75 ?
            <Typography sx={{ fontSize: 32, textAlign: 'center' }}>NOTE: Sorry but you cannot take the assesment. Your Average grade seem too low.</Typography> : ""}
        </Box>
        {
          show ? (
            <Box sx={style.questionareStyle}>
              <Box component={Grid} container sx={style.container}>
                {<Timer userId={userInfo.currentID} />}
              </Box>
              {
                (rowsPerPage > 0
                  ? qSets.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                  : qSets
                ).map((row) => (
                  <Box key={row.id}>
                    {show ? (
                      <QuestionareUI data={row.data} id={row.id} userId={userInfo.currentID} />
                    ) : (
                      <Box sx={{ width: "100%", minHeight: "50vh" }} />
                    )}
                  </Box>
                ))
              }
              {
                emptyRows > 0 && (
                  <Box />
                )
              }
              <Grid
                container
                justifyContent='center'
                alignItems='center'
                sx={style.footer}
              >
                <TablePagination
                  rowsPerPageOptions={[10, 15, 20, { label: "All", value: -1 }]}
                  colSpan={6}
                  count={qSets.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </Grid>
              {allAns.length === qSets.length ?
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                  <Button
                    disabled={allAns.length === 0 ? true : false}
                    onClick={() => {
                      localStorage.setItem("userId", userInfo.currentID);
                      localStorage.setItem("over", over);
                      navigate(`/assessment/result/${userInfo.currentID}`);
                    }}
                    sx={style.button}
                  >
                    "Submit"
                  </Button>
                </Box> : ""
              }
            </Box>
          ) : (
            <Box sx={{ height: "50vh" }} />
          )
        }
      </Box >
    </Box >
  );
}

export default Assessment;
