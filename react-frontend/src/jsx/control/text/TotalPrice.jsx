import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const Typography0 = styled(Typography)((props) => ({
  height: '100px',
  lineHeight:'100px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'300px',
  color: props.color||'black'
}));

function TotalPrice(props) {
  return (
    <Typography0 gutterBottom variant={props.variant} component={props.component} color={props.color}>
      {props.children}
    </Typography0>
  );
}

export default TotalPrice;

