import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const ForgetText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  width:'100%',
  fontSize:'16px',
  textAlign:'right',
  color:'#000',
  textDecoration:'none',
  marginRight:'140px'
});

function ForgetText(props) {
  return (
    <ForgetText1 gutterBottom variant={props.variant} component={props.component} to={props.to}>
      {props.children}
    </ForgetText1>
  );
}

export default ForgetText;

