import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Formik } from 'formik';

import './main.css';

export const Main = () => {
  return (
    <Box height="50%" width="50%">
      <Link to="/">
        <ArrowBackIcon color="action" fontSize="large" cursor="pointer" />
      </Link>
      <Formik initialValues={{ currentCurrency: '', receivedCurrency: '' }}>
        <form>
          <TextField required id="standard-required" defaultValue="Default value" />
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>RUB</MenuItem>
          </Select>

          <TextField required id="standard-required" defaultValue="Default valuen" />
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>RUB</MenuItem>
          </Select>
        </form>
      </Formik>
    </Box>
  );
};
