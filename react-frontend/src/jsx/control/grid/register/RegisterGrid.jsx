import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const RegisterGrid0 = styled(Grid)({
  textAlign:'left',
  paddingLeft:'20px'
});

function RegisterGrid(props) {
  return <RegisterGrid0>{props.children}</RegisterGrid0>;
}

export default RegisterGrid;
