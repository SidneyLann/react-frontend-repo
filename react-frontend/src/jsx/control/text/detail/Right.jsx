import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const Right1 = styled(Typography)({
  display:'inline-block',
  lineHeight:'50px',
  width:'20px',
  textAlign:'center',
  fontWeight:'100',
  background:'#ddd',
  height:'50px',
  position:'absolute',
  right:0,
  top:15
});

function Right(props) {
  return (
    <Right1 gutterBottom type={props.type} variant={props.variant} component={props.component} onClick={props.onClick}>
      {props.children}
    </Right1>
  );
}

export default Right;

