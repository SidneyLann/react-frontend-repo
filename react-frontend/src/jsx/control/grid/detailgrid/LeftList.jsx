import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const LeftList1 = styled(Grid)({
  display:'flex',
  width:'100%',
  flexDirection:'column',
  padding:'8px'
});

function LeftList(props) {
  return (
    <LeftList1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </LeftList1>
  );
}

export default LeftList;
