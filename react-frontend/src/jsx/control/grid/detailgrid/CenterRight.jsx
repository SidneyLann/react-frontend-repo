import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CenterRight1 = styled(Grid)({
  width:'79%',
  border:'1px solid #eee',
});

function CenterRight(props) {
  return (
    <CenterRight1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </CenterRight1>
  );
}

export default CenterRight;
