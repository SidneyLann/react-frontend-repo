import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FlexGridImg1 = styled(Grid)({
  display:"flex",
  background: '#fff',
  height: '512px',
});

function FlexGridImg(props) {
  return (
    <FlexGridImg1 item={props.item} container={props.container} xs={props.xs} onClick={props.onClick}>
      {props.children}
    </FlexGridImg1>
  );
}

export default FlexGridImg;
