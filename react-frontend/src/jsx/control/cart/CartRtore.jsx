import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const CartRtore1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  lineHeight:'40px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'110px',
  fontSize:'16px',
  margin:0,
  color:'#000'
});

function CartRtore(props) {
  return (
    <CartRtore1 gutterBottom href={props.href} variant={props.variant} onClick={props.onClick} component={props.component}>
      {props.children}
    </CartRtore1>
  );
}

export default CartRtore;

