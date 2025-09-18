import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

const LogoCard0 = styled(CardMedia)({
  maxWidth: 180,
  minWidth: 180,
  height: 100,
  marginTop: -20,
  marginBottom: -20,
  cursor: 'hand'
});

function LogoCard(props) {
  return (
    <LogoCard0 image={props.image} title={props.title}>
      {props.children}
    </LogoCard0>
  );
}

export default LogoCard;
