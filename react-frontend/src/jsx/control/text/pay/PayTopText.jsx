import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayTopText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  lineHeight:'70px',
  display:'inline-block',
  fontSize:'14px'
});

function PayTopText(props) {
  return (
    <PayTopText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayTopText1>
  );
}

export default PayTopText;

