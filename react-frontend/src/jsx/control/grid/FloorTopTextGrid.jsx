import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FloorTopTextGrid0 = styled(Grid)({
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between'
});

function FloorTopTextGrid(props) {
  return (
    <FloorTopTextGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </FloorTopTextGrid0>
  );
}

export default FloorTopTextGrid;
