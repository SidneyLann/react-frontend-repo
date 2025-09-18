import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const TopGrid0 = styled(Grid)({
  height: '37px',
  color: '#fff',
  textAlign: 'center',
  lineHeight: '37px',
  display: 'flex'
});

function TopGrid(props) {
  return (
    <TopGrid0 item={props.item} xs={props.xs} justify={props.justify}>
      {props.children}
    </TopGrid0>
  );
}

export default TopGrid;
