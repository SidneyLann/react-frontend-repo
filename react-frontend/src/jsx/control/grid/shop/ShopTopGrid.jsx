import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ShopTopGrid1 = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  width:'100%',
  marginTop:'20px',
  flex: '1',
});

function ShopTopGrid(props) {
  return (
    <ShopTopGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </ShopTopGrid1>
  );
}

export default ShopTopGrid;
