import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloatLeftText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  width:'48%',
  paddingLeft:'20px',
  fontSize:'16px',
  textAlign:'left',
  float:'left',
  color:'#000',
  textDecoration:'none',
  marginLeft:'10px'
});

function FloatLeftText(props) {
  return (
    <FloatLeftText1 gutterBottom variant={props.variant} component={props.component} to={props.to}>
      {props.children}
    </FloatLeftText1>
  );
}

export default FloatLeftText;

