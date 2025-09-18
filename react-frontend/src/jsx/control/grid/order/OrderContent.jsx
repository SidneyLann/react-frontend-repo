import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const OrderContent0 = styled(Grid)({
  width:'100%',
  display:'flex',
  background:'#fff',
  border:'1px solid #ddd',
  paddingTop:'20px',
  paddingBottom:'20px'
});

function OrderContent(props) {
  return <OrderContent0>{props.children}</OrderContent0>;
}

export default OrderContent;
