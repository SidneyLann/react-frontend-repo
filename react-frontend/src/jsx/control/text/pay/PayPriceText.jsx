import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayPriceText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  lineHeight:'70px',
  display:'inline-block',
  fontSize:'20px',
  fontWeight:'700',
  color:'#B2191B'
});

function PayPriceText(props) {
  return (
    <PayPriceText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayPriceText1>
  );
}

export default PayPriceText;

