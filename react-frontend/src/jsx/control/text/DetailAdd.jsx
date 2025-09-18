import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const DetailAdd1 = styled(Typography)({
  fontWeight: 'normal',
  textAlign:'center',
  margin:'0 auto',
  color:'#fff',
  background:'#3F51B5',
  fontSize:'16px',
  width:'190px',
  display:'inline-block',
  marginLeft:'12px',
  height:'50px',
  lineHeight:'50px',
  borderRadius:'3px',
  cursor:'pointer',
});

function DetailAdd(props) {
  return (
    <DetailAdd1 onClick={props.onClick} variant={props.variant} component={props.component}>
      {props.children}
    </DetailAdd1>
  );
}

export default DetailAdd;

