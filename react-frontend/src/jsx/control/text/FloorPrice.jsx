import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';


const FloorPrice1 = styled(Typography)({
  textAlign: 'left',
  lineHeight: '25px',
  color: 'red',
  fontSize:'18px'
});

function FloorPrice(props) {
  return (
    <FloorPrice1>
      {props.children}
    </FloorPrice1>
  );
}

export default FloorPrice;

