import { Container, FormControl, InputLabel, MenuItem, Select, Typography, TextField, Button, Card, Grid } from "@mui/material"
import Navbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";

// Source
// https://rapidapi.com/exchangerateapi/api/exchangerate-api/

const Workshop5 = () => {

    const [rates, setRates] = useState({});
    const [currentKey, setCurrentKey] = useState('');
    const [convertKey, setConvertKey] = useState('');
    const [currentRate, setCurrentRate] = useState('');
    const [convertRate, setConvertRate] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');

    const options = {
        method: 'GET',
        url: `https://exchangerate-api.p.rapidapi.com/rapid/latest/THB`,
        headers: {
            'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
            'x-rapidapi-key': 'your-api-key'
        }
    };

    const optionsCurrent = {
        method: 'GET',
        url: `https://exchangerate-api.p.rapidapi.com/rapid/latest/${currentKey}`,
        headers: {
            'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
            'x-rapidapi-key': 'your-api-key'
        }
    };

    useEffect(() => {
        currentKey ? (
            axios.request(optionsCurrent)
                .then(function (response) {
                    const ratesApi = response.data.rates
                    // console.log(ratesApi);
                    setRates(ratesApi);
                    setCurrentKey(Object.keys(ratesApi)[0]);
                    setCurrentRate(Object.values(ratesApi)[0]);
                })
                .catch(function (error) {
                    console.error(error);
                })
        ) : (
            axios.request(options)
                .then(function (response) {
                    const ratesApi = response.data.rates
                    // console.log(ratesApi);
                    setRates(ratesApi);
                    setCurrentKey(Object.keys(ratesApi)[0]);
                    setCurrentRate(Object.values(ratesApi)[0]);
                }).catch(function (error) {
                    console.error(error);
                })
        )
    }, [currentKey, convertKey])

    const handleCurrentKey = (event) => {
        setCurrentKey(event.target.value);
        setConvertKey('');
        setConvertRate('');
    };
    const handleConvertKey = (event) => {
        setConvertKey(event.target.value);
    };

    const handleAmount = (event) => {
        setAmount(event.target.value);
    };

    const convertMoney = async () => {
        setTotal('');
        if (amount && currentRate && convertRate) {
            let total = amount * currentRate * convertRate
            // console.log(`${currentRate}:${convertRate}`);
            setTotal(total);
        }
    }

    return (
        <>
            <Navbar header="Workshop 5 Currency Converter" />
            {rates ? (
                <>
                    <Typography variant="h4">แอพแปลงสกุลเงิน (API)</Typography>
                    <Card raised={true} sx={{ m: 1, p: 8 }}>
                        <Grid container columns={{ xs: 1, lg: 10 }}>

                            <Grid item xs={1} lg={2} >
                                <TextField
                                    type="number"
                                    id="outlined-basic"
                                    label="Amount"
                                    variant="outlined"
                                    sx={{ m: 1, minWidth: 180 }}
                                    onChange={handleAmount}
                                />
                            </Grid>

                            <Grid item xs={1} lg={2}>
                                <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
                                    <InputLabel id="current">From</InputLabel>
                                    <Select
                                        labelId="current-rate"
                                        id="current"
                                        label="current"
                                        value={currentKey}
                                        onChange={handleCurrentKey}
                                    >
                                        {Object.entries(rates).map(([key, rate], index) => (
                                            <MenuItem value={key} key={index} onClick={() => setCurrentRate(rate)} >{key}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={1} lg={2} >
                                <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
                                    <InputLabel id="convert">Convert To</InputLabel>
                                    <Select
                                        labelId="convert-rate"
                                        id="convert"
                                        label="convert"
                                        value={convertKey}
                                        onChange={handleConvertKey}
                                    >
                                        {Object.entries(rates).map(([key, rate], index) => (
                                            <MenuItem value={key} key={index} onClick={() => setConvertRate(rate)} >{key}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={1} lg={2}>
                                <Button variant={"contained"} size={'large'} sx={{ m: 1, p: 2, height: 56 }} onClick={() => convertMoney()}>Convert</Button>
                            </Grid>

                            <Grid item xs={1} lg={2}>
                                <Card sx={{ m: 1, p: 2, height: 56, minWidth: 180, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="h4">{total}</Typography>
                                </Card>
                            </Grid>

                        </Grid>
                    </Card>
                </>
            ) : ('')
            }

        </>
    )
};

export default Workshop5;