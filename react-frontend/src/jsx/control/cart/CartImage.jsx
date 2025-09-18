import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const CartImage1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  lineHeight:'40px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'100px',
  marginLeft:'20px',
  fontSize:'18px',
  margin:0,
  color:'#3F51B5'
});

function CartImage(props) {
  return (
    <CartImage1 gutterBottom variant={props.variant} onClick={props.onClick} component={props.component}>
      {props.children}
    </CartImage1>
  );
}

export default CartImage;

