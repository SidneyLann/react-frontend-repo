import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const DetailGrid1 = styled(Grid)({
    position: 'relative'
});

function DetailGrid(props) {
  return (
    <DetailGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </DetailGrid1>
  );
}

export default DetailGrid;
