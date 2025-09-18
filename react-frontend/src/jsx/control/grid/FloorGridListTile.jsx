import React from 'react';
import { styled } from '@mui/system';
import GridListTile from '@mui/material/GridListTile';

const FloorGridListTile0 = styled(GridListTile)({
  height: '330px',
  width: '24.5%'
});

function FloorGridListTile(props) {
  return (
    <FloorGridListTile0 key={props.key}>
      {props.children}
    </FloorGridListTile0>
  );
}

export default FloorGridListTile;
