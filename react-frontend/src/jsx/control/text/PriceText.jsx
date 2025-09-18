import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const PriceText1 = styled(Typography)({
  // textOverflow: 'ellipsis',
  height: '40px',
  width:'100%',
  textAlign:'center',
  fontWeight: 'normal',
  display:'block'
});

function PriceText(props) {
  return (
    <PriceText1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </PriceText1>
  );
}

export default PriceText;

