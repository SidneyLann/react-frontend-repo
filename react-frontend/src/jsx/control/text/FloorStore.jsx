import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloorStore1 = styled(Typography)({
  textAlign: 'left',
  lineHeight: '25px',
  background: '#fff',
  paddingBottom:0,
  color:'#757171',
  cursor:'pointer',
});

function FloorStore(props) {
  return (
    <FloorStore1 onClick={props.onClick}>
      {props.children}
    </FloorStore1>
  );
}

export default FloorStore;

