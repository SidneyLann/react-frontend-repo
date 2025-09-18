import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FloorTopLeftGrid0 = styled(Grid)({
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'left'
});

function FloorTopLeftGrid(props) {
  return (
    <FloorTopLeftGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </FloorTopLeftGrid0>
  );
}

export default FloorTopLeftGrid;
