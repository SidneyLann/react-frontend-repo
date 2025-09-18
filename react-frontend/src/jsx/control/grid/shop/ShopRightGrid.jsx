import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ShopRightGrid1 = styled(Grid)({
  width: '40%',
  display: 'flex'
});

function ShopRightGrid(props) {
  return (
    <ShopRightGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </ShopRightGrid1>
  );
}

export default ShopRightGrid;
