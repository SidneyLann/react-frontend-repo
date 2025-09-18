import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FootTextLine1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  textAlign:'center',
  fontWeight: 'normal',
  width:'20px',
  lineHeight:'20px',
  fontSize:'20px'
});

function FootTextLine(props) {
  return (
    <FootTextLine1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </FootTextLine1>
  );
}

export default FootTextLine;

