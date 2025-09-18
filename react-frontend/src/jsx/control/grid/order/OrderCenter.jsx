import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const OrderCenter0 = styled(Grid)({
  width:'100%',
  
});

function OrderCenter(props) {
  return <OrderCenter0>{props.children}</OrderCenter0>;
}

export default OrderCenter;
