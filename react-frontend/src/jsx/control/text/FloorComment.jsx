import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloorComment1 = styled(Typography)({
  textAlign: 'left',
  lineHeight: '25px',
  background: '#fff',
  fontSize:'13px',
  color:'#757171',
});

function FloorComment(props) {
  return (
    <FloorComment1>
      {props.children}
    </FloorComment1>
  );
}

export default FloorComment;

