import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const DelAndLike1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  lineHeight:'40px',
  fontWeight: 'normal',
  display:'inline-block',
  width:'70px',
  fontSize:'12px',
  margin:0,
  color:'#666'
});

function DelAndLike(props) {
  return (
    <DelAndLike1 gutterBottom href={props.href} variant={props.variant} onClick={props.onClick} component={props.component}>
      {props.children}
    </DelAndLike1>
  );
}

export default DelAndLike;

