/* eslint-disable react/prop-types */
import React from 'react';
import { styled } from '@mui/system';
import ImageListItem from '@mui/material/ImageListItem';

const GridListTile0 = styled(ImageListItem)({
  width: '19%',
  border:'1px solid red',
  minWidth:'220px',
  padding:'8px',
  marginBottom:'14px',
  marginLeft:'10px'
});

function GridItem(props) {
  return (
    <ImageListItem
      key={props.key}
      classes={props.classes}
      component={props.component}
      cols={1}
      rows={1}
    >
      {props.children}
    </ImageListItem>
  );
}

export default GridItem;
