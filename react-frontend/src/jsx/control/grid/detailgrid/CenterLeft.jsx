import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CenterLeft1 = styled(Grid)({
  width:'20%',
  border:'1px solid #eee',
  marginRight:'20px',
  textAlign:'center',
  height:'auto'
});

function CenterLeft(props) {
  return (
    <CenterLeft1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </CenterLeft1>
  );
}

export default CenterLeft;
