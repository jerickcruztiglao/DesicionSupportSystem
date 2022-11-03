import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Timer(userId) {
    const navigate = useNavigate();
    const initialMinute = 60, initialSeconds = 0;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    localStorage.setItem("userId", userId);
                    navigate(`/assessment/result/${userId}`);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: "column" }}>
            <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>Time Limit</Typography>
            {minutes === 0 && seconds === 0
                ? null
                : <h2> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
            }
        </Box>
    )
}

export default Timer;