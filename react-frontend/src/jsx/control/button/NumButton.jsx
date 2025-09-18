import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const NumButton1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  textAlign:'center',
  margin:'0 auto',
  color:'#fff',
  background:'#3F51B5',
  fontSize:'16px',
  width:'30px',
  display:'inline-block',
  height:'30px',
  lineHeight:'30px',
  borderRadius:'3px',
  cursor:'pointer',
});

function NumButton(props) {
  return (
    <NumButton1 gutterBottom onClick={props.onClick} variant={props.variant} component={props.component}>
      {props.children}
    </NumButton1>
  );
}

export default NumButton;

