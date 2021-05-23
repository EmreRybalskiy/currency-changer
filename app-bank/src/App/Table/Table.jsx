import React, { useState } from 'react';

import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const Table = ({
  setFirstOption,
  setSecondOption,
  firstOption,
  secondOption,
  currencys,
}) => {
  const handleChangeFirstOption = ({ target: { value } }) => {
    setFirstOption(value);
    localStorage.setItem('firstOption', value);
  };

  const handleChangeSecondOption = ({ target: { value } }) => {
    setSecondOption(value);
    localStorage.setItem('secondOption', value);
  };

  return (
    <div>
      <Box textAlign="center" marginTop="50px">
        If you visit us often, you can set default value
      </Box>
      <Box textAlign="center" marginTop="20px">
        <Button color="primary" variant="contained" width="50%" size="small">
          Accpept
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-evenly" marginTop="20px">
        <Box>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            defaultValue={firstOption}
            value={firstOption}
            onChange={handleChangeFirstOption}>
            {currencys.map((currency) => {
              return <MenuItem value={currency}>{currency}</MenuItem>;
            })}
          </Select>
        </Box>
        <Box>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={secondOption}
            defaultValue={secondOption}
            onChange={handleChangeSecondOption}>
            {currencys.map((currency) => {
              return <MenuItem value={currency}>{currency}</MenuItem>;
            })}
          </Select>
        </Box>
      </Box>
      <Link to="/">
        <ArrowBackIcon color="action" fontSize="large" cursor="pointer" />
      </Link>
    </div>
  );
};
