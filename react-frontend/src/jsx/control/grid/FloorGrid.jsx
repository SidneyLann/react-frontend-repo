import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FloorGrid0 = styled(Grid)({
  display: 'flex',
  width:'100%',
  minWidth:'1440px',
  flexDirection: 'column',
  overflow: 'hidden',
  background:'rgba(253,240,221, 1)',
  padding:'40px 120px 0px 120px'
});

function FloorGrid(props) {
  return (
    <FloorGrid0 style={props.style} item={props.item} container={props.container} xs={props.xs} >
      {props.children}
    </FloorGrid0>
  );
}

export default FloorGrid;
