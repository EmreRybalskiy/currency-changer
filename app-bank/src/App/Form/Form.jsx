import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

import { NATIONAL_CURRENCY } from '../../helpers/constants.js';

import { Formik } from 'formik';
import * as yup from 'yup';

export const Form = ({
  currencys,
  firstOption,
  secondOption,
  setFirstOption,
  setSecondOption,
  data,
}) => {
  const onSubmit = (values, setFieldValue) => {
    if (firstOption === secondOption) {
      setFieldValue('purchase', values.sale);
    } else if (firstOption === NATIONAL_CURRENCY) {
      const sale = +data.find((el) => el.ccy === secondOption).sale;
      const res = (+values.sale / sale).toFixed(2);
      setFieldValue('purchase', res);
      localStorage.setItem(['a'], '123');
    } else if (secondOption === NATIONAL_CURRENCY) {
      const buy = +data.find((el) => el.ccy === firstOption).buy;
      const res = (+values.sale * buy).toFixed(2);
      setFieldValue('purchase', res);
    } else {
      const buy = +data.find((el) => el.ccy === firstOption).buy;
      const sale = +data.find((el) => el.ccy === secondOption).sale;
      const res1 = +values.sale * buy;
      const res2 = (res1 / sale).toFixed(2);
      setFieldValue('purchase', res2);
    }
  };

  const handleChangeFirstOption = ({ target: { value } }) => {
    setFirstOption(value);
    localStorage.setItem('firstOption', value);
  };

  const handleChangeSecondOption = ({ target: { value } }) => {
    setSecondOption(value);
    localStorage.setItem('secondOption', value);
  };

  return (
    <Box height="50%" width="80%">
      <Formik initialValues={{ sale: '', purchase: '' }} validateOnBlur>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          setFieldValue,
        }) => (
          <form style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
            <Box>
              <TextField
                required
                id="standard-required"
                name="sale"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sale}
              />
              {}
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue={firstOption}
                onChange={handleChangeFirstOption}
                value={firstOption}>
                {currencys.map((currency) => {
                  return <MenuItem value={currency}>{currency}</MenuItem>;
                })}
              </Select>
              {touched.sale && errors.sale && <p>Error: {errors.name}</p>}
              <FormHelperText>Today Rates</FormHelperText>
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={!isValid && !dirty}
              onClick={() => {
                onSubmit(values, setFieldValue);
              }}>
              Exchange
            </Button>
            <Box>
              <TextField
                required
                id="standard-required"
                name="purchase"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.purchase}
              />
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue={secondOption}
                onChange={handleChangeSecondOption}
                value={secondOption}>
                {currencys.map((currency) => {
                  return <MenuItem value={currency}>{currency}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Today Rates</FormHelperText>
            </Box>
          </form>
        )}
      </Formik>
      <Link to="/">
        <ArrowBackIcon color="action" fontSize="large" cursor="pointer" />
      </Link>
    </Box>
  );
};
