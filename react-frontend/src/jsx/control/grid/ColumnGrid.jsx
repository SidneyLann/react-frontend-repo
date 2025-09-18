import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ColumnGrid0 = styled(Grid)({
  display:'flex',
  flex: 1,
  flexDirection:'column',
});

function ColumnGrid(props) {
  return (
    <ColumnGrid0 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </ColumnGrid0>
  );
}

export default ColumnGrid;
