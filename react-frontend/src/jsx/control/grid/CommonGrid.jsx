import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const CommonGrid0 = styled(Grid)({
  background: '#fff'
});

function CommonGrid(props) {
  return (
    <CommonGrid0>
      {props.children}
    </CommonGrid0>
  );
}

export default CommonGrid;
