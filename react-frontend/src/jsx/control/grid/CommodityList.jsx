import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CommodityListByKeyword1 = styled(Grid)({
 width:'19%',
 border:'1px solid #ddd',
 height:'330px',
 flexWrap:'wrap',
 padding:'10px',
 marginBottom:'20px'
});

function CommodityListByKeyword(props) {
  return (
    <CommodityListByKeyword1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </CommodityListByKeyword1>
  );
}

export default CommodityListByKeyword;
