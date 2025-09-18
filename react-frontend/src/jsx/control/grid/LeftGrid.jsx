import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const LeftGrid0 = styled(Grid)({
});

function LeftGrid(props) {
  return (
    <LeftGrid0
      item
      id={props.id}
      xs={props.xs}
      justify={props.justify}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}>
      {props.children}
    </LeftGrid0>
  );
}

export default LeftGrid;
