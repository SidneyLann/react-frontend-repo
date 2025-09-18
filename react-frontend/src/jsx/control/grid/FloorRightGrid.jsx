import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const FloorRightGrid0 = styled(Grid)({
  color: '#000',
  textAlign: 'center',
  height: '720px',
  display: 'flex',
  float: 'right',
  width: '74.5%',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
});

function FloorRightGrid(props) {
  return (
    <FloorRightGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </FloorRightGrid0>
  );
}

export default FloorRightGrid;
