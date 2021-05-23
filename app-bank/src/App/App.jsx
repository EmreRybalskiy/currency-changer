import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Home } from './Home/Home.jsx';
import { Form } from './Form/Form.jsx';
import { Table } from './Table/Table.jsx';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

const FIRST_DEFAULT_VALUE = 'USD';
const SECOND_DEFAULT_VALUE = 'UAH';

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const App = () => {
  const CustomClass = useStyles();

  const [data, setData] = useState([]);
  const [firstOption, setFirstOption] = useState(FIRST_DEFAULT_VALUE);
  const [secondOption, setSecondOption] = useState(SECOND_DEFAULT_VALUE);
  const [currencys, setCurrencys] = useState([]);

  useEffect(() => {
    fetchData();
    setInitialValues();
  }, []);

  const setInitialValues = () => {
    const firstOption = localStorage.getItem('firstOption');
    const secondOption = localStorage.getItem('secondOption');

    firstOption && setFirstOption(firstOption);
    secondOption && setSecondOption(secondOption);
  };

  const fetchData = async () => {
    const result = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });

    const ccys = result.map((el) => el.ccy);
    const baseCcys = result.map((el) => el.base_ccy);
    const uniqueCurrency = [...ccys, ...baseCcys].filter(onlyUnique);
    setData(result);
    setCurrencys(uniqueCurrency);
  };

  return (
    <Container className={CustomClass.wrapper} maxWidth="md" flex>
      <BrowserRouter>
        <Box
          display="flex"
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
          bgcolor="lightgreen">
          <Route exact path="/">
            <Home firstOption={firstOption} secondOption={secondOption} />
          </Route>
          <Route path="/form">
            <Form
              currencys={currencys}
              firstOption={firstOption}
              setFirstOption={setFirstOption}
              secondOption={secondOption}
              setSecondOption={setSecondOption}
              data={data}
            />
          </Route>
          <Route path="/table">
            <Table
              setFirstOption={setFirstOption}
              setSecondOption={setSecondOption}
              currencys={currencys}
              firstOption={firstOption}
              secondOption={secondOption}
            />
          </Route>
        </Box>
      </BrowserRouter>
    </Container>
  );
};
