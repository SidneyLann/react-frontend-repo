import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FindPass1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  width:'140px',
  textAlign:'center',
  lineHeight:'30px',
  borderRadius:'3px',
  background:'#3F51B5',
  color:'#fff',
  height:'30px',
  display:'inline-block',
  textDecoration:'none',
  marginLeft:'10px'
});

function FindPass(props) {
  return (
    <FindPass1 gutterBottom variant={props.variant} component={props.component} to={props.to} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </FindPass1>
  );
}

export default FindPass;

