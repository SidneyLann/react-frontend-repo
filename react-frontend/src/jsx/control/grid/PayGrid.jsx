/**
 * 二维码支付的布局grid
 */

import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const PayGrid0 = styled(Grid)({
  width: '200px',
  height: '300px',
  display: 'flex',
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

function PayGrid(props) {
  return (
    <PayGrid0>
      {props.children}
    </PayGrid0>
  );
}

export default PayGrid;
