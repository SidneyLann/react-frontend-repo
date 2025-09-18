import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const OrderPriceGrid0 = styled(Grid)({
  width:'100%',
  display:'flex',
  background:'#F5F5F5',
  border:'1px solid #ddd',
  textAlign:'center',
  flexDirection:'column',
  padding:'20px 0 '
});

function OrderPriceGrid(props) {
  return <OrderPriceGrid0>{props.children}</OrderPriceGrid0>;
}

export default OrderPriceGrid;
