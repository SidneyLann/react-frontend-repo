import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CommodityFlex1 = styled(Grid)({
 width:'100%',
 display:'flex',
 justifyContent:'space-between',
 flexWrap:'wrap'
});

function CommodityFlex(props) {
  return (
    <CommodityFlex1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </CommodityFlex1>
  );
}

export default CommodityFlex;
