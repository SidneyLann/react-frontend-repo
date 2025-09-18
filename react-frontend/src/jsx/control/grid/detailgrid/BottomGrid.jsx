import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const BottomGrid1 = styled(Grid)({
  width:'100%',
  minWidth:'450px',
  background:'#F5F3EF',padding:'10px'
});

function BottomGrid(props) {
  return (
    <BottomGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </BottomGrid1>
  );
}

export default BottomGrid;
