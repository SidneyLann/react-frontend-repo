import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const BackGroundGrid1 = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-around',
  width:'100%',
  minWidth:'450px',
  height:'50px',
  background:'#f6e8d2',
  paddingLeft:'10px'
});

function BackGroundGrid(props) {
  return (
    <BackGroundGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </BackGroundGrid1>
  );
}

export default BackGroundGrid;
