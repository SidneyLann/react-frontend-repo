import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const LeftGrid1 = styled(Grid)({
  display:'flex',
  width:'100%'
});

function LeftGrid(props) {
  return (
    <LeftGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </LeftGrid1>
  );
}

export default LeftGrid;
