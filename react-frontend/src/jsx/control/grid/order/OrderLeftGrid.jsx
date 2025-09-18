import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const OrderLeftGrid0 = styled(Grid)({
  width:'50%',
  minWidth:'600px',
  display:'flex',
  paddingLeft:'30px'
});

function OrderLeftGrid(props) {
  return <OrderLeftGrid0>{props.children}</OrderLeftGrid0>;
}

export default OrderLeftGrid;
