import React from 'react';
import { styled } from '@mui/system';
import ImageList from '@mui/material/ImageList';

const ImageList1 = styled(ImageList)({
    width:'100%',float:'left',dislay:'flex',padding:'0 30px',height:'78px',overflow:'hidden',marginTop:5
});

function MyImageList(props) {
  return (
    <ImageList1 columns={props.cols} id={props.id} href={props.href} item={props.item} container={props.container} xs={props.xs}>
      {props.children}
    </ImageList1>
  );
}

export default MyImageList;
