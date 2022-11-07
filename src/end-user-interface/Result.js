import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { collection, doc, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Helmet } from "react-helmet";
import logo from '../images/image1.png'
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const style = {
  root: {
    background: (theme) =>
      `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    width: "100%",
    height: {
      xs: '100%',
      sm: '100%',
      md: '100vh',
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 10,
    paddingTop: 5,
  },
  section1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1300,
    height: '100%',
    padding: 2,
    justifyContent: 'center',
  },
  section2: {
    backgroundColor: (theme) => `${theme.palette.secondary.main}`,
    display: "flex",
    alignItems: "center",
    maxWidth: 1300,
    padding: 2,
    justifyContent: 'center',
    flexDirection: {
      xs: 'column',
      sm: 'column',
      md: 'row',
    },
  },
  buttonStyle: {
    width: {
      xs: "30ch",
      sm: "35ch",
      md: "35ch",
    },
    height: "6.5ch",
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    margin: '0 auto',
    marginTop: 4,
    display: "flex"
  },
}

function Result() {
  const [loading, setLoading] = useState(false)
  let userId = localStorage.getItem("userId");
  let over = localStorage.getItem("over");
  const [score, setScore] = React.useState({
    ABM: 0,
    STEM: 0,
    HUMMS: 0,
    TVL: 0,
    GAS: 0,
  });
  const myChart = {
    labels: ["ABM", "STEM", "HUMMS", "TVL", "GAS"],
    refData: [score.ABM, score.STEM, score.HUMMS, score.TVL, score.GAS],
    datasets: [
      {
        label: "Assesment Result",
        data: [score.ABM, score.STEM, score.HUMMS, score.TVL, score.GAS],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  const navigate = useNavigate();
  const [arrStrand1, setArrStrand1] = useState("");
  const [arrStrand2, setArrStrand2] = useState("");
  const [total, setTotal] = useState(0);
  const max = Math.max(...myChart.datasets[0].data)
  useEffect(() => {
    setLoading(true)
    const collRef = collection(db, "Students", userId, "Answers");
    const orderedRef = query(collRef, where("isCorrect", "==", true));
    const unsubscribe = onSnapshot(orderedRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().questionStrand === "ABM") {
          score.ABM += 1;
        } else if (doc.data().questionStrand === "STEM") {
          score.STEM += 1;
        } else if (doc.data().questionStrand === "HUMMS") {
          score.HUMMS += 1;
        } else if (doc.data().questionStrand === "TVL") {
          score.TVL += 1;
        } else if (doc.data().questionStrand === "GAS") {
          score.GAS += 1;
        }
      })
      setLoading(false);
      let newTotal = score.ABM + score.STEM + score.HUMMS + score.TVL + score.GAS
      setTotal(newTotal)
    })
    return unsubscribe;
  }, [score, userId]);

  const [text, setText] = useState("Try Again")
  useEffect(() => {
    if (score.ABM === 0 && score.STEM === 0 && score.HUMMS === 0 && score.TVL === 0 && score.GAS === 0) {
      (async () => {
        setText("Try Again")
        await setDoc(
          doc(db, "Students", userId),
          {
            strand: "Failed",
            strand2: "Failed",
          },
          { merge: true }
        );
      })()
      setArrStrand1("")
      setArrStrand2("")
    } else {
      setText("Thank You!")
      let indexes = []
      for (var i = 0; i < 5; i++) {
        if (myChart.refData[i] === max) {
          indexes.push(i)
        }
      }
      (async () => {
        await setDoc(
          doc(db, "Students", userId),
          {
            strand: myChart.labels[indexes.at(0)],
            strand2: indexes.length > 1 ? myChart.labels[indexes.at(1)] : "",
          },
          { merge: true }
        );
      })()
      setArrStrand1(myChart.labels[indexes.at(0)])
      if (indexes.length > 1) { setArrStrand2(myChart.labels[indexes.at(1)]) } else { setArrStrand2("") }
    }
  }, [userId, myChart.refData, myChart.labels, max])

  return (
    <Box component={Grid} sx={style.root}>
      <Helmet>
        <title>Assesment Result</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      <Box sx={style.section1}>
        <Typography p={1} variant={"h3"} textAlign='center' style={{ fontWeight: 'bold' }}>
          Assessment Result
        </Typography>
        {
          loading ?
            <Box component={Grid} container alignItems="center" justifyContent='center' style={{
              padding: 100
            }}>
              <CircularProgress color="secondary" size={100} />
            </Box>
            :
            <Box sx={style.section2}>
              <Box>
                <Typography p={1} variant={"h4"} textAlign='left'>
                  {total} / {over}
                </Typography>
                {arrStrand1 === "" ? <Typography p={1} variant={"h4"} textAlign='left'>Seems like you failed the assesment.Please try again!</Typography> :
                  <>
                    <Typography p={1} variant={"h4"} textAlign='left'>
                      Congratulations! Your assesment result have fitted <b style={{ fontSize: '42px' }}>{arrStrand1}</b>.
                    </Typography>
                    {arrStrand2 === "" ?
                      "" : <Typography p={1} variant={"h4"} textAlign='left'>In addition, it fitted <b style={{ fontSize: '42px' }}>{arrStrand2}</b> as your second choice as well.</Typography>}
                  </>
                }
                <Button variant='contained' sx={style.buttonStyle} onClick={() => {
                  if (arrStrand1 === "") {
                    navigate('/assessment')
                  } else {
                    navigate('/academic-strands')
                  }
                }}>{text}</Button>
              </Box>
              <Box sx={{
                height: 500, width: {
                  xs: 330,
                  sm: 500,
                  md: 1060
                },
              }}>
                <Bar
                  height={400}
                  width={500}
                  data={myChart}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        min: 0,
                        max: 30,
                        ticks: {
                          stepSize: 2,
                        },
                      },
                    },
                    plugins: {
                      datalabels: {
                        display: true,
                        color: "#000",
                        formatter: Math.round,
                        anchor: "end",
                        offset: -20,
                        align: "start"
                      }
                    },
                    legend: {
                      display: false
                    }
                  }}
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                  }}
                />
              </Box>
            </Box>
        }
      </Box>
    </Box >
  );
}
export default Result;
