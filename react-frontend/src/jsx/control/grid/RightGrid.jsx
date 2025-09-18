import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const RightGrid0 = styled(Grid)({
  background: '#fff',
  height: '549px'
});

function RightGrid(props) {
  return (
    <RightGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </RightGrid0>
  );
}

export default RightGrid;
