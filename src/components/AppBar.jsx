import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import EditProfile from './EditProfile';
import Profile from './Profile';
import SignUp from './SignUp';
import UserTable from './UserList';
import TablePopup from './TablePopup';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const pages = ['Profile', 'Dashboard'];

export default function ResponsiveAppBar() {

    const { logout } = useLogout();

    const { user } = useAuthContext()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [openPopup, setOpenPopup] = React.useState(false);
    const [openTable, setOpenTable] = React.useState(false);

    function showUser() {
        console.log(user);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <DirectionsCarIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'default'
                        }}
                    >
                        AUTOPOINT
                    </Typography>

                    <IconButton aria-label="dark" color="inherit" onClick={() => setOpenTable(true)}>
                        <DarkModeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', mr: 0 } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => setOpenPopup(true)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}

                            </Button>

                        ))}
                    </Box>

                    {user &&
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                cursor: 'default'
                            }}
                        >
                            {user.fname}
                        </Typography>
                    }

                    <Box sx={{ flexGrow: 0 }}>
                        <Link to={'/'}>
                            <Button sx={{ fontWeight: "bold" }} variant="contained" startIcon={<LogoutIcon />} onClick={() => logout()}>
                                Log Out
                            </Button>
                        </Link>

                    </Box>

                </Toolbar>
            </Container>

            <EditProfile openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <Profile />
            </EditProfile>

            <TablePopup openPopup={openTable} setOpenPopup={setOpenTable}>
                <UserTable />
            </TablePopup>

        </AppBar>
    );
}
