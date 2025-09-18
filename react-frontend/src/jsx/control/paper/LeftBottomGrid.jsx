import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const Grid0 = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  height: '8%',
  background: '#eee',
});

function LeftBottomGrid(props) {
  return <Grid0 container>{props.children}</Grid0>;
}

export default LeftBottomGrid;
