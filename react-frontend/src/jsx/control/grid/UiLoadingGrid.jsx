import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const Loading = styled(Grid)({
  textAlign: 'center',
  height: '30px',
  width: '10%',
});

function UiLoadingGrid(props) {
  return (
    <div>
      Loading...
    </div>
  );
}

export default UiLoadingGrid;
