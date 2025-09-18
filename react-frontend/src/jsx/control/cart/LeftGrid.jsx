import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const LeftGrid0 = styled(Grid)({
  width:'30%',
  minWidth:'480px',
  display:'flex',
  paddingLeft:'30px'
});

function LeftGrid(props) {
  return <LeftGrid0>{props.children}</LeftGrid0>;
}

export default LeftGrid;
