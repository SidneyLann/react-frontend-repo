import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CartTitle0 = styled(Grid)({
    height: '40px',
    fontWeight: 'normal',
    marginTop:'20px',
    display:'inline-block',
    width:'300px',
    lineHeight:'76px',
    margin:0,
});

function CartTitle(props) {
  return <CartTitle0 onClick={props.onClick}>{props.children}</CartTitle0>;
}

export default CartTitle;
