import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import brands from "../names";
import { models } from "../names";
import ResponsiveAppBar from "./AppBar";
import Copyright from './Copyright';
import BasicModal from "./Prediction";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useAuthContext } from "../hooks/useAuthContext";

const theme = createTheme();

export default function Home() {

    function handleSubmit(event) {
        event.preventDefault();
        setShowPrice(true);
    }

    const [showPrice, setShowPrice] = React.useState(false);

    return <div>
        <ResponsiveAppBar />
        <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={brands}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField required {...params} label="Brand" />}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={models}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField required {...params} label="Model" />}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={brands}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField required {...params} label="Trim/Edition" />}
                        />
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <FormControl sx={{ width: 300, marginRight: 200 }}>
                            <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Fuel Type"
                            >
                                <MenuItem value={10}>Petrol</MenuItem>
                                <MenuItem value={20}>Diesel</MenuItem>
                                <MenuItem value={30}>Hybrid</MenuItem>
                                <MenuItem value={40}>Electric</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-lg-4">
                        <FormControl sx={{ width: 300, marginRight: 200 }}>
                            <InputLabel id="demo-simple-select-label">Transmission</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Transmission"
                            >
                                <MenuItem value={10}>Auto</MenuItem>
                                <MenuItem value={20}>Manual</MenuItem>
                                <MenuItem value={30}>Tiptronic</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-lg-4">
                        <FormControl sx={{ width: 300, marginRight: 200 }}>
                            <InputLabel id="demo-simple-select-label">Body Type</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Body Type"
                            >
                                <MenuItem value={10}>Sedan</MenuItem>
                                <MenuItem value={20}>Hatchback</MenuItem>
                                <MenuItem value={30}>Coupe</MenuItem>
                                <MenuItem value={40}>Convertible</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-4">
                        <TextField required type="number" id="outlined-basic" label="Year of Manufacture" variant="outlined" sx={{ width: 300, marginRight: 200 }} />
                    </div>

                    <div className="col-lg-4">
                        <TextField required type="number" id="outlined-basic" label="Engine Capacity" variant="outlined" sx={{ width: 300, marginRight: 200 }} />

                    </div>

                    <div className="col-lg-4">
                        <TextField required type="number" id="outlined-basic" label="Mileage" variant="outlined" sx={{ width: 300, marginRight: 200 }} />
                    </div>

                </div>

                <div>
                    <Button type="submit" variant="contained" size="large" sx={{mr: 2}} endIcon={<BatchPredictionIcon />} >
                        Predict Price
                    </Button>

                    <Button type="reset" variant="contained" size="large" sx={{ml: 2}} endIcon={<RestartAltIcon />}>
                        Reset
                    </Button>
                </div>

            </div>

        </Box>

        <Copyright sx={{ mt: 12 }} />
        <BasicModal showPrice={showPrice} setShowPrice={setShowPrice} />
    </div>
}


