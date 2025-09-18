import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const CenterText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  fontWeight: 'normal',
  textAlign:'center',
  margin:'0 auto',
  color:'#7B7676',
  fontSize:'16px'
});

function CenterText(props) {
  return (
    <CenterText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </CenterText1>
  );
}

export default CenterText;

