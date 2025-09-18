import React from 'react';
import { styled } from '@mui/system';
import GridList from '@mui/material/GridList';

const GridList0 = styled(GridList)({
  overflowY: 'unset'
});

function NoOverflowGrid(props) {
  return (
    <GridList0 cols={props.cols}>
      {props.children}
    </GridList0>
  );
}

export default NoOverflowGrid;
