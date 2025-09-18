import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloorRightText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  //   width:'400px',
  lineHeight: '37px',
  fontSize: '16px',
  textAlign: 'right'
});

function FloorRightText(props) {
  return (
    <FloorRightText1 gutterBottom variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </FloorRightText1>
  );
}

export default FloorRightText;

