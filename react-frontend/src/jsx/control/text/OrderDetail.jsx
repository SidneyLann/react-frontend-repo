import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const OrderDetail1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  fontWeight: 'normal',
  paddingTop:10,
  display:'inline-block',
  width:'300px',
  margin:0,
});

function OrderDetail(props) {
  return (
    <OrderDetail1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </OrderDetail1>
  );
}

export default OrderDetail;

