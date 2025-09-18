import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayRight1 = styled(Typography)({
    lineHeight:'70px',
    display:'inline-block',
    fontSize:'18px',
    float:'right',paddingRight:'60px'
});

function PayRight(props) {
  return (
    <PayRight1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayRight1>
  );
}

export default PayRight;

