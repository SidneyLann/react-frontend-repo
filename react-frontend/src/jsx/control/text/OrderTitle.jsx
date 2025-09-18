import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const OrderTitle1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  lineHeight:'40px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'300px',
  margin:0,
});

function OrderTitle(props) {
  return (
    <OrderTitle1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </OrderTitle1>
  );
}

export default OrderTitle;

