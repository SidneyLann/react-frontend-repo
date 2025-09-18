import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloorTitle1 = styled(Typography)({
  textAlign: 'left',
  lineHeight: '25px',
  background: '#fff',
  cursor: 'pointer',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '16px'
});

function FloorTitle(props) {
  return (
    <FloorTitle1 onClick={props.onClick}>
      {props.children}
    </FloorTitle1>
  );
}

export default FloorTitle;

