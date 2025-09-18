import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FlexGrid1 = styled(Grid)({
  display: 'flex',
  flex: '1'
});

function FlexGrid(props) {
  return (
    <FlexGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </FlexGrid1>
  );
}

export default FlexGrid;
