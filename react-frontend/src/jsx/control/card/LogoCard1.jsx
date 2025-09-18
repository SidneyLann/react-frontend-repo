import React from 'react';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';

const LogoCard0 = styled(Card)({
  maxWidth: 200,
  minWidth: 200,
  margin: 0,
  marginRight:'100px'
});

function LogoCard1(props) {
  return (
    <LogoCard0 image={props.image} title={props.title}>
      {props.children}
    </LogoCard0>
  );
}

export default LogoCard1;
