import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const PayButton0 = styled(Button)({
  minWidth:'210px',
  padding:'0px',
  height:'60px',
  fontSize:'18px',
  marginLeft:'100px',
  float:'right'
  // add css here

});

function PayButton(props) {
  return (
    <PayButton0
      variant="contained"
      color="primary"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </PayButton0>
  );
}

export default PayButton;
