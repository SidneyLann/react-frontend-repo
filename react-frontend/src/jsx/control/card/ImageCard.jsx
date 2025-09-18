import React from 'react';
import { styled } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import LazyLoad from 'react-lazyload';

const CardMedia0 = styled(CardMedia)({
  width: '100%',
  minWidth: 200,
  height: 250,
  objectFit: 'cover',
  // border: '1px solid black',
  // borderRadius: 4
});

function ImageCard(props) {
  return (
    <LazyLoad offset={100}>
    <CardMedia0 image={props.image} title={props.title} onClick={props.onClick}>
      {props.children}
    </CardMedia0>
    </LazyLoad>
  );
}

export default ImageCard;
