import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayWayText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  lineHeight:'70px',
  fontSize:'20px'
});

function PayWayText(props) {
  return (
    <PayWayText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayWayText1>
  );
}

export default PayWayText;

