import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const DetailLeft21 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  textAlign:'center',
  margin:'0 auto',
  color:'#7B7676',
  fontSize:'16px'
});

function DetailLeft2(props) {
  return (
    <DetailLeft21 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </DetailLeft21>
  );
}

export default DetailLeft2;

