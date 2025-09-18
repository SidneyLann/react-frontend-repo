import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CartContent0 = styled(Grid)({
  width:'100%',
  display:'flex',
  background:'#fff',
  height:'160px',
  border:'1px solid #ddd',
  paddingTop:'20px',
  paddingBottom:'20px'
});

function CartContent(props) {
  return <CartContent0>{props.children}</CartContent0>;
}

export default CartContent;
