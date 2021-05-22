import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Home } from './Home/Home.jsx';
import { Main } from './Main/Main.jsx';

const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

export const App = () => {
  const CustomClass = useStyles();
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
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Box>
      </BrowserRouter>
    </Container>
  );
};
