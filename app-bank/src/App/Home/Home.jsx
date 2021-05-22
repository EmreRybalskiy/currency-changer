import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import './home.css';

export const Home = () => {
  return (
    <Box height="50%" width="50%" textAlign="center">
      <Box fontSize="24px" marginBottom="30px">
        Welcome ot Our Exchanger! You can exchange currency at a favorable rate
      </Box>
      <Box fontSize="20px" marginBottom="30px">
        Default currency: {'USD => UAH'}
      </Box>
      <Button color="primary" variant="contained" width="50%" size="large">
        <Link to="/main" style={{ textDecoration: 'none', color: '#fff' }}>
          Get started
        </Link>
      </Button>
    </Box>
  );
};
