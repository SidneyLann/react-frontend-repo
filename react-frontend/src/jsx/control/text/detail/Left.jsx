import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const Left1 = styled(Typography)({
  display:'inline-block',
  lineHeight:'50px',
  textAlign:'center',
  width:'20px',
  background:'#ddd',
  height:'50px',
  position:'absolute',
  left:0,
  top:15
});

function Left(props) {
  return (
    <Left1 gutterBottom type={props.type} variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </Left1>
  );
}

export default Left;

