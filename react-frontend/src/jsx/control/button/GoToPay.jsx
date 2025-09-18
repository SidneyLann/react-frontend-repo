import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const GoToPay0 = styled(Button)({
  minWidth:'110px',
  padding:'0px',
  height:'40px',
  fontSize:'14px',
  marginLeft:'100px',
  borderRadius:0
  // add css here

});

function GoToPay(props) {
  return (
    <GoToPay0
      variant="contained"
      color="primary"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </GoToPay0>
  );
}

export default GoToPay;
