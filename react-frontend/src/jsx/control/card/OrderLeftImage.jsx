import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

const LogoContantCard0 = styled(CardMedia)({
  maxWidth: 100,
  minWidth: 100,
  height: 100,
  marginRight:20,
  border: '1px solid black',
  // borderRadius: 4
});

function OrderLeftImage(props) {
  return (
    <LogoContantCard0 image={props.image} title={props.title}>
      {props.children}
    </LogoContantCard0>
  );
}

export default OrderLeftImage;
