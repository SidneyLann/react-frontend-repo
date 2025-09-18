import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayPriceNum1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  fontWeight: 'normal',
  fontSize:'20px',
  color:'#B2191B',
  display:'inline'
});

function PayPriceNum(props) {
  return (
    <PayPriceNum1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayPriceNum1>
  );
}

export default PayPriceNum;

