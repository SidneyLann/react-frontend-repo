import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloatRightText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  width:'48%',
  fontSize:'16px',
  paddingRight:'20px',
  float:'right',
  textAlign:'right',
  color:'#000',
  textDecoration:'none',
  marginRight:'10px'
});

function FloatRightText(props) {
  return (
    <FloatRightText1 gutterBottom variant={props.variant} component={props.component} to={props.to}>
      {props.children}
    </FloatRightText1>
  );
}

export default FloatRightText;

