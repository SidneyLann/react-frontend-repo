import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const OrderTitleGrid0 = styled(Grid)({
  width:'100%',
  display:'flex',
  background:'#F5F5F5',
  border:'1px solid #ddd'
});

function OrderTitleGrid(props) {
  return <OrderTitleGrid0>{props.children}</OrderTitleGrid0>;
}

export default OrderTitleGrid;
