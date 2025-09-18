import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ButtonGrid0 = styled(Grid)({
  // marginTop: 200,
  // float: 'left',
  // position:'relative'
});

function ButtonGrid(props) {
  return <ButtonGrid0>{props.children}</ButtonGrid0>;
}

export default ButtonGrid;
