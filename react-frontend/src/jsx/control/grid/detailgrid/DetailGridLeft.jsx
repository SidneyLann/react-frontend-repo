import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const DetailGridLeft1 = styled(Grid)({
  minWidth:'450px',
  maxWidth:'450PX',
  height:'530px',
  border:'1px solid #ddd'
});

function DetailGridLeft(props) {
  return (
    <DetailGridLeft1 item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </DetailGridLeft1>
  );
}

export default DetailGridLeft;
