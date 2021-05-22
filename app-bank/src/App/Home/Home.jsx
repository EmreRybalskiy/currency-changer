import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const Home = ({ isData }) => {
  return (
    <Box height="50%" width="50%" textAlign="center">
      <Box fontSize="24px" marginBottom="30px">
        Welcome ot Our Exchanger! You can exchange currency at a favorable rate
      </Box>
      <Box fontSize="20px" marginBottom="30px">
        Default currency: {'USD => UAH'}
      </Box>
      <Button color="primary" variant="contained" width="50%" size="large">
        <Link to="/form" style={{ textDecoration: 'none', color: '#fff' }}>
          Get started
        </Link>
      </Button>
      <Box textAlign="center" marginTop="50px">
        If you visit us often, you can set default value
      </Box>
      <Box display="flex" justifyContent="space-evenly" marginTop="20px">
        <Box>
          <span>Sale: </span>
          <Select
            value={20}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled">
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>RUB</MenuItem>
            <MenuItem value={40}>UAH</MenuItem>
          </Select>
        </Box>

        <Box>
          <span>Purchase: </span>
          <Select
            value={20}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled">
            <MenuItem value={10}>USD</MenuItem>
            <MenuItem value={20}>EUR</MenuItem>
            <MenuItem value={30}>RUB</MenuItem>
            <MenuItem value={40}>UAH</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};
