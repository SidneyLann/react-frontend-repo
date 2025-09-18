import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const GRID_LEVE1 = styled(Grid)({
  background: '#fff',
  width:'100%',
  // minWidth:'1440px'
});

function ContentGrid(props) {
  return (
    <GRID_LEVE1 item={props.item} container={props.container} >
      {props.children}
    </GRID_LEVE1>
  );
}

export default ContentGrid;
