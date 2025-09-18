import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const Description1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  fontSize:'14px',
  margin:'0 auto',
  color:'#000',
});

function Description(props) {
  return (
    <Description1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </Description1>
  );
}

export default Description;

