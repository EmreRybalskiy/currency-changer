import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const Home = ({ secondOption, firstOption }) => {
  return (
    <Box height="50%" width="50%" textAlign="center">
      <Box fontSize="24px" marginBottom="30px">
        Welcome ot Our Exchanger! You can exchange currency at a favorable rate
      </Box>
      <Box fontSize="20px" marginBottom="30px">
        Default currency: {`${firstOption} => ${secondOption}`}
      </Box>
      <Box display="flex" justifyContent="space-around">
        <Button color="primary" variant="contained" width="50%" size="large">
          <Link to="/form" style={{ textDecoration: 'none', color: '#fff' }}>
            Get started
          </Link>
        </Button>
        <Button color="primary" variant="contained" width="50%" size="large">
          <Link to="/table" style={{ textDecoration: 'none', color: '#fff' }}>
            Go to set default value
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
