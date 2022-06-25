import React, {  } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Main = () => {
  return (
    <Box sx={{ 
      width: 420,
      height: 600,
      backgroundColor: '#6495ED',
      boxShadow: '0px 0px 20px 20px #6495ED90',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '30px',
      marginTop: '50px',
     }}>
      <div>
        <Button variant="contained" size="large">
          복용
        </Button>
      </div>
    </Box>
  );
}

export default Main;