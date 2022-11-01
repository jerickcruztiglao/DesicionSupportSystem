import React, { useState, useEffect } from "react";
import { theme } from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Navigate, Route, Routes } from "react-router-dom";
//Pages
import Landpage from "./end-user-interface/Landpage";
import AcademicTracks from "./end-user-interface/AcademicTracks";
import AdminLogin from "./admin-side/AdminLogin";
import ProtectedRoutes from "././routes/ProtectedRoutes";
import PublicRoutes from "././routes/PublicRoutes";
import Dashboard from "./admin-side/Dashboard";
import Assessment from "./end-user-interface/AssessmentsFolder/Assessment";
import { auth } from "./utils/firebase";
import Result from "./end-user-interface/Result";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import StudentRecords from "./admin-side/adminFunc/StudentRecords";
import ViewQuestion from "./admin-side/adminFunc/ViewQuestion";
import { grey } from "@mui/material/colors";

const style = {
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: grey[200]
  },
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // dispatch(getUserId())
      setIsLoading(true);
      if (authUser) {
        setIsAuthenticated(true);
        setIsLoading(false);
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    });
    return () => {
      setIsLoading(true);
      setIsAuthenticated(false);
    };
  }, []);
  if (isLoading === true) {
    return (
      <Box style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
        <Backdrop sx={style.backdrop} open>
          <CircularProgress color="secondary" size={100} />
        </Backdrop>
      </Box>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='home' element={<Landpage />} />
          <Route path='academic-strands' element={<AcademicTracks />} />
          <Route path='assessment' element={<Assessment />} />
          <Route path='assessment/result/:id' element={<Result />} />
          <Route element={<PublicRoutes isAuth={isAuthenticated} />}>
            <Route path='admin/login' element={<AdminLogin />} />
          </Route>
          <Route element={<ProtectedRoutes isAuth={isAuthenticated} />}>
            <Route path='admin/dashboard' element={<Dashboard />} />
            <Route path='admin/records' element={<StudentRecords />} />
            <Route path='admin/questions' element={<ViewQuestion />} />
          </Route>
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
