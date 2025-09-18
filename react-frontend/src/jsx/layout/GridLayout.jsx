import React from "react";
import { styled } from '@mui/system';
import ImageList from '@mui/material/ImageList';

const GridLayout0 = styled(ImageList)({
  display:'flex',
  justifyContent:'center',
});

function GridLayout(props) {
  return (
    <ImageList classes={props.classes} component={props.component} cols={5} cellHeight={400}>
      {props.children}
    </ImageList>
  )
}

export default GridLayout;