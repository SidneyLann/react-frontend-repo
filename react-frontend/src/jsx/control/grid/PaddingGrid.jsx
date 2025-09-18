import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const PaddingGrid0 = styled(Grid)({
  background: '#f5f5f5'
});

function PaddingGrid(props) {
  return (
    <PaddingGrid0
      container={props.container}
      item={props.item}
      justify={props.justify}
      xs={props.xs}
    >
      {props.children}
    </PaddingGrid0>
  );
}

export default PaddingGrid;
