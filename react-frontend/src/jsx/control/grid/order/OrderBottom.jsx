import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const OrderBottom0 = styled(Grid)({
  width:'100%',
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'right',
  textAlign: 'right',
  background:'#fff',
  paddingTop:'20px',
  paddingRight:'40px',
  paddingBottom:'20px'
});

function OrderBottom(props) {
  return <OrderBottom0>{props.children}</OrderBottom0>;
}

export default OrderBottom;
