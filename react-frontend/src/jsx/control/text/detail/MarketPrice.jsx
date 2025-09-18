import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const MarketPrice1 = styled(Typography)({
  display:'inline-block',
  lineHeight:'50px',
});

function MarketPrice(props) {
  return (
    <MarketPrice1 gutterBottom variant={props.variant} component={props.component}>
      {props.children}
    </MarketPrice1>
  );
}

export default MarketPrice;

