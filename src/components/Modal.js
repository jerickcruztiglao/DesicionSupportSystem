import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const style = {
    modalBackground: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(200, 200, 200)',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '500px',
        height: '500px',
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
    },

    title: {
        display: 'inline-block',
        textAlign: 'center',
        marginTop: '10px',
    },


    titleCloseBtn: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    titleButton: {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '25px',
        cursor: 'pointer',
    },

    body: {
        flex: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.7rem',
        textAlign: 'center',
    },

    footer: {
        flex: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: '150px',
        height: '45px',
        margin: '10px',
        border: 'none',
        backgroundColor: 'cornflowerblue',
        color: 'white',
        borderRadius: '8px',
        fontSize: '20px',
        cursor: 'pointer',
    },

    cancelBtn: {
        backgroundColor: 'crimson'
    }
}

export default function Modal({ setOpenModal, route }) {

    const navigate = useNavigate();

    return (
        <Box sx={style.modalBackground}>
            <Box sx={style.modalContainer}>
                <Box sx={style.titleCloseBtn}>
                    <Button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        sx={style.titleButton}
                    >
                        X
                    </Button>
                </Box>
                <Box sx={style.title}>
                    <Typography variant="h1">Are You Sure You Want to Continue?</Typography>
                </Box>
                <Box sx={style.body}>
                    <Typography variant="capstion">The next page looks amazing. Hope you want to go there!</Typography>
                </Box>
                <Box sx={style.footer}>
                    <Button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        sx={style.cancelBtn}
                    >
                        Cancel
                    </Button>
                    <Button sx={style.footerButton} 
                        onClick={() => navigate(route)}
                    >Continue</Button>
                </Box>
            </Box>
        </Box>
    )
}
