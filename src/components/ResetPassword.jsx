import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import image from '../images/bg2.jpg';
import CustomizedSnackbars from './EmailAlert';
import Zoom from '@mui/material/Zoom';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';

export default function FormDialog(props) {

    const { openReset, setOpenReset } = props;

    const [openAlert, setOpenAlert] = React.useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setOpenAlert(true);
        setOpenReset(false);
    }

    return (
        <Zoom in={true}>
            <div>
                <Dialog transitionDuration={1000} open={openReset} PaperProps={{
                    style: {
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                    },
                }}>
                    <DialogTitle>
                        Reset Password
                    </DialogTitle>
                    <Box component="form" onSubmit={handleSubmit}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter your email to send password reset link.
                            </DialogContentText>
                            <TextField
                                required
                                autoFocus
                                margin="normal"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpenReset(false)}>Cancel</Button>
                            <Button type="submit">Send Email</Button>
                        </DialogActions>
                    </Box>

                </Dialog>
                <CustomizedSnackbars openAlert={openAlert} setOpenAlert={setOpenAlert} />
            </div>
        </Zoom>

    );
}