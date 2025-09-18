import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const NameGrid1 = styled(Grid)({
  
  width:'100%',
  textAlign:'center'
});

function NameGrid(props) {
  return (
    <NameGrid1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </NameGrid1>
  );
}

export default NameGrid;
