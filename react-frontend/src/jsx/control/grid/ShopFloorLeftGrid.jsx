import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const ShopFloorLeftGrid0 = styled(Grid)({
  color: '#000',
  textAlign: 'center',
  height: '670px',
  display: 'flex',
  float: 'left',
  width: '74.5%',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
});

function ShopFloorLeftGrid(props) {
  return (
    <ShopFloorLeftGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </ShopFloorLeftGrid0>
  );
}

export default ShopFloorLeftGrid;
