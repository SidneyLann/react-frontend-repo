import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const OrderNumber1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '100px',
  lineHeight:'100px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'300px',
  margin:0,
});

function OrderNumber(props) {
  return (
    <OrderNumber1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </OrderNumber1>
  );
}

export default OrderNumber;

