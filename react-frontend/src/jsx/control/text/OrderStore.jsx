import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const OrderStore1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  lineHeight:'40px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'300px',
  fontSize:'18px',
  margin:0,
  color:'#3F51B5'
});

function OrderStore(props) {
  return (
    <OrderStore1 gutterBottom variant={props.variant} onClick={props.onClick} component={props.component}>
      {props.children}
    </OrderStore1>
  );
}

export default OrderStore;

