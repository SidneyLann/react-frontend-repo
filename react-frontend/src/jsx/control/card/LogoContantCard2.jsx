import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

const LogoContantCard0 = styled(CardMedia)({
  maxWidth: 200,
  minWidth: 200,
  height: 100,
  margin:'0 auto'
  // border: '1px solid black',
  // borderRadius: 4
});

function LogoContantCard2(props) {
  return (
    <LogoContantCard0 image={props.image} title={props.title}>
      {props.children}
    </LogoContantCard0>
  );
}

export default LogoContantCard2;
