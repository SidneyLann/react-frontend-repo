import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const OverText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  fontWeight: 'normal'
});

function OverText(props) {
  return (
    <OverText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </OverText1>
  );
}

export default OverText;

