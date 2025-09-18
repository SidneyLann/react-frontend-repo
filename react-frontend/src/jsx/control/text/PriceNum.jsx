import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PriceNum1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  fontWeight: 'normal',
  color:'#B2191B',
  display:'inline'
});

function PriceNum(props) {
  return (
    <PriceNum1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PriceNum1>
  );
}

export default PriceNum;

