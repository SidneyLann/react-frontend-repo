import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const DetailLeftTitle1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  fontSize:'18px',
  height:'30px',
  textAlign:'left',
  paddingLeft:'10px',
  lineHeight:'30px',
  margin:'0 auto',
  color:'#7B7676',
  background:'#eee'
});

function DetailLeftTitle(props) {
  return (
    <DetailLeftTitle1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </DetailLeftTitle1>
  );
}

export default DetailLeftTitle;

