import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  getAuth,
  signOut
} from "firebase/auth";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import AverageResult from "./graphs/AverageResult";
import { Helmet } from "react-helmet";
import logo from '../images/image1.png';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../utils/firebase";

const auth = getAuth();

const style = {
  root: {
    background: `linear-gradient(to bottom right,#0052A2, #00498D)`,
    width: "100%",
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 10
  },
  section1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1300,
  },
  logoutText: {
    fontStyle: "italic",
    textDecoration: "underline",
    float: "right",
    display: "block",
    cursor: "pointer",
    color: "#E1ACAC",
    fontWeight: "bolder",
    "&:hover": { color: "white" },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 2,
    width: 300,
    backgroundColor: 'white',
    margin: 2,
    cursor: 'pointer',
    transition: 'all ease 200ms',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShawd: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)'
    }
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
  },
  total: {
    fontSize: 30,
    marginTop: 2
  },
  icon: {
    fontSize: 65,
    marginTop: 2
  },
}

export default function Dashboard() {

  let navigate = useNavigate();
  const loggedOut = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/admin/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const [studentCount, setStudentCount] = useState(0);
  const [quesCount, setQuesCount] = useState(0);
  const [MostSelected, setMostSelected] = useState("");
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState({
    ABM: 0,
    STEM: 0,
    HUMMS: 0,
    TVL: 0,
    GAS: 0,
  });
  const myChart = {
    labels: ["ABM", "STEM", "HUMMS", "TVL", "GAS"],
    refData: [count.ABM, count.STEM, count.HUMMS, count.TVL, count.GAS],
    datasets: [
      {
        data: [count.ABM, count.STEM, count.HUMMS, count.TVL, count.GAS],
      },
    ],
  };
  const max = Math.max(...myChart.datasets[0].data);
  useEffect(() => {
    setLoading(true)
    const collRef = collection(db, "Students");
    const unsubscribe = onSnapshot(collRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().strand === "ABM") {
          count.ABM += 1;
        } else if (doc.data().strand === "STEM") {
          count.STEM += 1;
        } else if (doc.data().strand === "HUMMS") {
          count.HUMMS += 1;
        } else if (doc.data().strand === "TVL") {
          count.TVL += 1;
        } else if (doc.data().strand === "GAS") {
          count.GAS += 1;
        }
      });
      setLoading(false);
    });
    return unsubscribe;
  }, [count]);

  useEffect(() => {
    const sQuery = query(collection(db, "Students"));
    onSnapshot(sQuery, (querySnapshot) => {
      setStudentCount(querySnapshot.docs.length)
    });
    const qQuery = query(collection(db, "Questions"));
    onSnapshot(qQuery, (querySnapshot) => {
      setQuesCount(querySnapshot.docs.length)
    });
  }, []);

  useEffect(() => {
    let indexes = []
    for (var i = 0; i < 5; i++) {
      if (myChart.refData[i] === max) {
        indexes.push(i)
      }
    }
    setMostSelected(myChart.labels[indexes.at(0)])
  }, [myChart.refData, myChart.labels, max])

  return (
    <Box component={Grid} sx={style.root}>
      <Helmet>
        <title>Admin Dashboard</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      <Box sx={style.section1}>
        <Box component={Grid} container alignItems="center" justifyContent='center' >
          <Box component={Grid} container justifyContent='center' sx={{ marginTop: 5, alignItems: 'center' }}>
            <AccountCircle />
            <Typography sx={{ paddingLeft: .5, fontWeight: "bolder", fontSize: 18 }}>
              Logged in as admin. Click here to &nbsp;
            </Typography>
            <Typography
              sx={style.logoutText}
              component='div'
              onClick={loggedOut}
            >
              Log Out.
            </Typography>
          </Box>
        </Box>
        <Box
          component={Grid}
          container
          justifyContent="space-evenly"
          sx={{ marginTop: 5, width: '100%' }}
        >
          <Box
            sx={style.cardContainer}
            onClick={() => navigate("/admin/records")}
          >
            <Typography sx={style.label}>No. of Students</Typography>
            <Box sx={style.boxContainer}>
              <Typography sx={style.total}>{studentCount}</Typography>
              <SchoolIcon sx={style.icon} />
            </Box>
          </Box>
          <Box
            sx={style.cardContainer}
            onClick={() => navigate("/admin/questions")}
          >
            <Typography sx={style.label}>No. of Questions</Typography>
            <Box sx={style.boxContainer}>
              <Typography sx={style.total}>{quesCount}</Typography>
              <QuizIcon sx={style.icon} />
            </Box>
          </Box>
          <Box
            sx={style.cardContainer}
          >
            <Typography sx={style.label}>Most Selected Strand</Typography>
            <Box sx={style.boxContainer}>
              <Typography sx={style.total}>{MostSelected}</Typography>
              <TouchAppIcon sx={style.icon} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={style.section1}>
        <Box
          component={Grid}
          container
          justifyContent="center"
          sx={{ marginTop: 3, paddingBottom: 5 }}
        >
          <AverageResult />
        </Box>
      </Box>
    </Box>
  )
}
