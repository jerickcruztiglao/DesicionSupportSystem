import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Box, CircularProgress, Grid, Typography, } from "@mui/material";
import { collection, onSnapshot, } from "firebase/firestore";
import { db } from "../../utils/firebase";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function AverageResult() {
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
        label: "Average Result",
        data: [count.ABM, count.STEM, count.HUMMS, count.TVL, count.GAS],
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
    let indexes = []
    for (var i = 0; i < 5; i++) {
      if (myChart.refData[i] === max) {
        indexes.push(i)
      }
    }
    localStorage.setItem("MostSelected", myChart.labels[indexes.at(0)])
  }, [myChart.refData, myChart.labels, max])

  return (
    <Box sx={{
      backgroundColor: 'white', paddingBottom: 8, paddingTop: 2, width: {
        xs: 330,
        sm: 500,
        md: 1060
      }
    }}>
      <Typography textAlign='center' sx={{
        marginBottom: 2,
        fontSize: 20,
        fontWeight: 'bold'
      }}>
        Average result of all student assessment
      </Typography>
      {
        loading ?                 
        <Box component={Grid} container alignItems="center" justifyContent='center' style={{
          padding: 100
        }}>
          <CircularProgress color="secondary" size={100} />
        </Box>  
          :
          <Box sx={{ height: 500 }}>
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
              }}
              style={{
                backgroundColor: 'white',
                padding: 10,
              }}
            />
          </Box>
      }
    </Box>
  );
}
export default AverageResult;
