import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Home } from './Home/Home.jsx';
import { Form } from './Form/Form.jsx';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

export const App = () => {
  const CustomClass = useStyles();
  const [isData, setIsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data;
        });
      setIsData(result);
    };

    fetchData();
  }, []);

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
            <Home isData={isData} />
          </Route>
          <Route path="/form" component={Form} />
        </Box>
      </BrowserRouter>
    </Container>
  );
};
