import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Helmet } from "react-helmet";
import logo from '../../images/image1.png';
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
const columns = [
  { field: "id", headerName: "ID", width: 170, },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 70,
    editable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "sex",
    headerName: "Sex",
    width: 80,
    editable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "average",
    headerName: "Average",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: false,
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "strand",
    headerName: "First Choice",
    width: 170,
    editable: false,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "strand2",
    headerName: "Second Choice",
    width: 170,
    editable: false,
    align: "center",
    headerAlign: "center",
  },
];


const style = {
  root: {
    background: (theme) =>
      `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    width: "100%",
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 20,
    paddingTop: 5
  },
  dataCardContainer: {
    width: {
      xs: 300,
      sm: 500,
      md: 1000
    },
    height: '65vh',
    backgroundColor: 'white'
  },
  section1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1300,
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
};

function StudentRecords() {
  let navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = useState([])
  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, "Students"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          fullName: doc.data().name,
          age: doc.data().age,
          sex: doc.data().sex,
          average: doc.data().average,
          strand: doc.data().strand,
          strand2: doc.data().strand2
        });
      });
      setLoading(false);
      setPayload(data);
    });
    return unsubscribe;
  }, []);
  return (
    <Box component={Grid} sx={style.root}>
      <Helmet>
        <title>Student records</title>
        <link rel="Decision Support Icon" href={logo} />
      </Helmet>
      {
        loading === true ?
          <Box component={Grid} container alignItems="center" justifyContent='center' style={{
            padding: 100
          }}>
            <CircularProgress color="secondary" size={100} />
          </Box> :
          <Box sx={style.section1}>
            <Box component={Grid} container justifyContent='flex-start'>
              <Box component={Grid} container sx={style.headerContainer}>
                <IconButton sx={{}} onClick={() => navigate("/admin/dashboard")}>
                  <ArrowBackIcon sx={style.arrowIconStyle} />
                </IconButton>
              </Box>
            </Box>
            <Typography
              sx={{
                textAlign: 'center', mb: 3, fontWeight: 'bold', letterSpacing: 1, fontSize: 35
              }}
            >Student records</Typography>
            <Box component={Grid} container alignItems="center" justifyContent='center' >
              <Box component={Grid} container alignItems="center" justifyContent='center' sx={style.dataCardContainer}>
                <DataGrid
                  rows={payload}
                  columns={columns}
                  pageSize={pageSize}
                  rowsPerPageOptions={[5, 10, 20]}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  checkboxSelection
                  disableSelectionOnClick
                  getRowSpacing={params => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                  })}
                  sx={{
                    [`& .${gridClasses.row}`]: {
                      backgroundColor: grey[200],
                      fontWeight: 'bold'
                    },
                    [`& .${gridClasses.columnHeader}`]: {
                      fontWeight: 'bold',
                      fontSize: 15
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>}
    </Box>
  );
}

export default StudentRecords;
