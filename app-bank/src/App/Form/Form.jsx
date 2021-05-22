import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import { Formik } from 'formik';

export const Form = () => {
  return (
    <Box height="50%" width="80%">
      <Formik initialValues={{ sell: '', receivedCurrency: '' }}>
        <form style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
          <Box>
            <TextField required id="standard-required" defaultValue="Sale" />
            <Select
              value={10}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled">
              <MenuItem value={10}>USD</MenuItem>
              <MenuItem value={20}>EUR</MenuItem>
              <MenuItem value={30}>RUB</MenuItem>
              <MenuItem value={40}>UAH</MenuItem>
            </Select>
            <FormHelperText>Today Rates</FormHelperText>
          </Box>
          <Button variant="contained" color="primary" size="small">
            Exchange
          </Button>
          <Box>
            <TextField required id="standard-required" defaultValue="Purchase" />
            <Select
              value={20}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled">
              <MenuItem value={10}>USD</MenuItem>
              <MenuItem value={20}>EUR</MenuItem>
              <MenuItem value={30}>RUB</MenuItem>
              <MenuItem value={40}>UAH</MenuItem>
            </Select>
            <FormHelperText>Today Rates</FormHelperText>
          </Box>
        </form>
      </Formik>
      <Link to="/">
        <ArrowBackIcon color="action" fontSize="large" cursor="pointer" />
      </Link>
    </Box>
  );
};
