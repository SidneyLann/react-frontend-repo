import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

const LogoContantCard0 = styled(CardMedia)({
  maxWidth: 450,
  minWidth: 450,
  height: 450,
//   width: '350px', height: '350px'
  // border: '1px solid black',
  // borderRadius: 4
});

function DetailImage(props) {
  return (
    <LogoContantCard0 
    image={props.image}
    id={props.id}
    alt={props.alt}
    >
      {props.children}
    </LogoContantCard0>
  );
}

export default DetailImage;
