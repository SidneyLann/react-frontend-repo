import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const DetailBuy1 = styled(Typography)({
  fontWeight: 'normal',
  textAlign:'center',
  margin:'0 auto',
  color:'#3F51B5',
  fontSize:'16px',
  width:'170px',
  border:'1px solid #F9CE8E',
  height:'50px',
  display:'inline-block',
  lineHeight:'50px',
  borderRadius:'3px',
  background:'#F5F3EF',
  cursor:'pointer',
});

function DetailBuy(props) {
  return (
    <DetailBuy1 onClick={props.onClick} variant={props.variant} component={props.component} disabled={true}>
      {props.children}
    </DetailBuy1>
  );
}

export default DetailBuy;

