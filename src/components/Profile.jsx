import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const theme = createTheme();

export default function Profile() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [fnameDisabled, setFNameDisabled] = React.useState(true);
    const [lnameDisabled, setLNameDisabled] = React.useState(true);
    const [emailDisabled, setEmailDisabled] = React.useState(true);
    const [passwordDisabled, setPassswordDisabled] = React.useState(true);

    function handleClick(event) {
        const type = event.target.name;
        console.log(event);
        switch (type) {
            case "firstName":
                setFNameDisabled(false);
                break;
            case "lastName":
                setLNameDisabled(false);
                break;
            case "email":
                setEmailDisabled(false);
                break;
            default:
                setPassswordDisabled(false);
        }
    }

    return (
        <ThemeProvider theme={theme} >
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4" color="grey">
                        Gayashan Tharaka
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    disabled={fnameDisabled}
                                    defaultValue="Gayashan"
                                    label="First Name"
                                    name="firstName"
                                    fullWidth
                                    id="firstName"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClick}
                                                    edge="end"                                                
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    disabled={lnameDisabled}
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    defaultValue="Tharaka"
                                    label="Last Name"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClick}
                                                    edge="end"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={emailDisabled}
                                    fullWidth
                                    id="email"
                                    name="email"
                                    defaultValue="gayashantrox@gmail.com"
                                    label="Email"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClick}
                                                    edge="end"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={passwordDisabled}
                                    fullWidth
                                    name="password"
                                    label="Change Password"
                                    type="password"
                                    id="password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClick}
                                                    edge="end"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    disabled={passwordDisabled}
                                    fullWidth
                                    name="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}