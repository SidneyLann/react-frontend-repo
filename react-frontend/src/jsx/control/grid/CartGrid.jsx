import React from 'react';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const CartGrid0 = styled(Grid)({
  marginLeft: '1%',
  marginTop: '30px'
});

function CartGrid(props) {
  return (
    <CartGrid0 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </CartGrid0>
  );
}

export default CartGrid;
