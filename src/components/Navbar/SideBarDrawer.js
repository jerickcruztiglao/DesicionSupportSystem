import { Box, Button, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SubjectIcon from '@mui/icons-material/Subject';
import { Link, useNavigate } from 'react-router-dom';

const drawerWidth = 1200;
const transitionDuration = 500;

const style = {
    menuIconContainer: {
        marginLeft: 'auto',
        marginRight: '20px'
    },
    icons: {
        fontSize: '1.5rem',
        marginTop: "5px",
        marginLeft: "15px",
        marginRight: "20px",
        color: '#fff'
    },
    iconStyle: {
        fontSize: {
            xs: 35,
            sm: 38,
            md: 38
        },
        transform: 'rotateY(180deg)',
        fill: '#fff'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
        //backgroundColor: "rgba(0,0,0,0.6)" Don't target here
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(120,120,120,0.2)", //target here,
        transition: (theme) => theme.transitions.create("margin", {
            easing: (theme) => theme.transitions.easing.sharp,
            duration: transitionDuration
        }),
        marginLeft: -drawerWidth
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#fff'
    },
    btnStyle: {
        backgroundColor: 'transparent',
        border: 1,
        borderColor: '#fff',
        color: '#fff',
        fontWeight: 'bold'
    }
};

export default function SideBarDrawer() {

    const [openDrawer, setOpenDrawer] = useState(false);

    const navigate = useNavigate();

    return (
        <Box>
            <Drawer
                anchor='left'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                transitionDuration={{
                    enter: transitionDuration,
                    exit: transitionDuration
                }}
                classes={{
                    paper: style.drawerPaper
                }}
                PaperProps={{
                    sx: {
                        width: 240,
                        color: "rgba(225,249,27,1)",
                        backgroundColor: "#115479"
                    }
                }}
            >
                <List sx={{
                    paddingLeft: 2
                }}>
                    <Box component={Grid} justifyContent="center" sx={{
                        marginTop: 3,
                        marginBottom: 2
                    }}>
                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>DECISION SUPPORT SYSTEM</Typography>
                    </Box>
                    <ListItem
                        button
                        onClick = {() => navigate('/home')}
                    >
                        <ListItemIcon>
                            <HomeIcon sx={style.icons} />
                            <ListItemText>
                                <Typography sx={style.textStyle}>HOME</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick = {() => navigate('/stem')}
                    >
                        <ListItemIcon>
                            <SubjectIcon sx={style.icons} />
                            <ListItemText>
                                <Typography sx={style.textStyle}>STEM</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick = {() => navigate('/abm')}
                    >
                        <ListItemIcon>
                            <SubjectIcon sx={style.icons} />
                            <ListItemText>
                                <Typography sx={style.textStyle}>ABM</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick = {() => navigate('/humss')}
                    >
                        <ListItemIcon>
                            <SubjectIcon sx={style.icons} />
                            <ListItemText>
                                <Typography sx={style.textStyle}>HUMSS</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick = {() => navigate('/gas')}
                    >
                        <ListItemIcon>
                            <SubjectIcon sx={style.icons} />
                            <ListItemText>
                                <Typography sx={style.textStyle}>GAS</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        onClick = {() => navigate('/tvl')}
                    >
                        <ListItemIcon>
                            <SubjectIcon sx={style.icons} />
                            <ListItemText>
                                <Typography sx={style.textStyle}>TVL</Typography>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        button
                        sx={{
                            marginLeft: 2
                        }}
                        onClick = {() => navigate('/admin/login')}
                    >
                        <ListItemText>
                            <Button variant="contained" sx={style.btnStyle}>
                                Admin
                            </Button>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                sx={style.menuIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                {!openDrawer ? <MenuIcon sx={style.iconStyle} /> : <MenuOpenIcon sx={style.iconStyle} />}
            </IconButton>
        </Box >
    )
}
