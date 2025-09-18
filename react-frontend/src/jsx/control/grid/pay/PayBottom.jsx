import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayBottom1 = styled(Typography)({
  paddingLeft:'140px',
  paddingRight:'100px'
});

function PayBottom(props) {
  return (
    <PayBottom1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayBottom1>
  );
}

export default PayBottom;

