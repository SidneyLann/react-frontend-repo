import React from 'react';
import { styled } from '@mui/system';
import ImageListItem from '@mui/material/ImageListItem';


const ImageItem1 = styled(ImageListItem)({
    width:'50px',height:'50px',border:'1px solid #ddd',margin:'15px 5px 0 5px'
});

function ImageItem(props) {
  return (
    <ImageItem1 id={props.id} href={props.href} item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </ImageItem1>
  );
}

export default ImageItem;
