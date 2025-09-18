import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CartLeft0 = styled(Grid)({
  display:'flex',
  background:'#fff',
  padding:'20px',
  paddingBottom:'20px',
  width:'30%',
  minWidth:'480px',
});

function CartLeft(props) {
  return <CartLeft0>{props.children}</CartLeft0>;
}

export default CartLeft;
