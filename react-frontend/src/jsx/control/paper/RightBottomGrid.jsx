import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const Grid0 = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  background: '#eee',
});

function RightBottomGrid(props) {
  return (
    <Grid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </Grid0>
  );
}

export default RightBottomGrid;
