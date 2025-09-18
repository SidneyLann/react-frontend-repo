import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const PaddingGrid20 = styled(Grid)({
  paddingLeft: '100px',
  paddingRight: '100px',
  background: '#fff',
  minWidth: '1440px',
  width: '100%'
});

function PaddingGrid2(props) {
  return (
    <PaddingGrid20
      container={props.container}
      item={props.item}
      justify={props.justify}
      xs={props.xs}
    >
      {props.children}
    </PaddingGrid20>
  );
}

export default PaddingGrid2;
