import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ShopLeftGrid1 = styled(Grid)({
  width: '60%',
  display: 'flex',padding:'0 20px',
  position:'relative'
});

function ShopLeftGrid(props) {
  return (
    <ShopLeftGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </ShopLeftGrid1>
  );
}

export default ShopLeftGrid;
