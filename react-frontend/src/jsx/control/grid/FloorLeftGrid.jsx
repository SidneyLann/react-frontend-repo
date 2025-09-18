import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FloorLeftGrid0 = styled(Grid)({
  width: '25%',
  float: 'left',
  height: '720px',
  background: '#fff',
  marginRight: '5px'
});

function FloorLeftGrid(props) {
  return (
    <FloorLeftGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </FloorLeftGrid0>
  );
}

export default FloorLeftGrid;
