import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ShopFloorRightGrid0 = styled(Grid)({
  color: '#000',
  width: '25%',
  float: 'right',
  height: '670px',
  background: '#fff',
  marginLeft: '5px',
  border: '1px solid red'
});

function ShopFloorRightGrid(props) {
  return (
    <ShopFloorRightGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </ShopFloorRightGrid0>
  );
}

export default ShopFloorRightGrid;
