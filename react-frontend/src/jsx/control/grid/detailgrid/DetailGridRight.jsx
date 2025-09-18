import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const DetailGridRight1 = styled(Grid)({
  width:'69%',
  minWidth:'450px',
  height:'550px',
  paddingLeft:'20px',
  position:'relative'
});

function DetailGridRight(props) {
  return (
    <DetailGridRight1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </DetailGridRight1>
  );
}

export default DetailGridRight;
