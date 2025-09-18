import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const PayWay0 = styled(Grid)({
  paddingLeft: '120px',
  paddingRight: '100px',
  display:'flex',
  borderTop:'1px solid #eee',
  background: '#fff',
  minWidth:'1440px',
  width:'100%'
});

function PayWay(props) {
  return (
    <PayWay0
      container={props.container}
      item={props.item}
      justify={props.justify}
      xs={props.xs}
    >
      {props.children}
    </PayWay0>
  );
}

export default PayWay;
