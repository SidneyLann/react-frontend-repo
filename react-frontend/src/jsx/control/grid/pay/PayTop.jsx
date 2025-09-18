import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const PayTop0 = styled(Grid)({
  paddingLeft: '120px',
  paddingRight: '100px',
  
  borderTop:'1px solid #eee',
  height:'70px',
  background: '#fff',
  minWidth:'1440px',
  width:'100%'
});

function PayTop(props) {
  return (
    <PayTop0
      container={props.container}
      item={props.item}
      justify={props.justify}
      xs={props.xs}
    >
      {props.children}
    </PayTop0>
  );
}

export default PayTop;
