import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PayBottomText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  lineHeight:'70px',
  display:'inline-block',
  fontSize:'18px'
});

function PayBottomText(props) {
  return (
    <PayBottomText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PayBottomText1>
  );
}

export default PayBottomText;

