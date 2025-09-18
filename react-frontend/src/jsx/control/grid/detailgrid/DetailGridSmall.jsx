import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const DetailGridSmall1 = styled(Grid)({
  width: '100%',
  minWidth: '450px',
  height: '450px',
  border: '1px solid #ddd'
});

function DetailGridSmall(props) {
  return (
    <DetailGridSmall1 id={props.id} href={props.href} item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </DetailGridSmall1>
  );
}

export default DetailGridSmall;
