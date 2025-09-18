import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

function PictureGird(props) {
  const {
    url, xs
  } = props;
  const PictureGrid0 = styled(Grid)({
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: "relative",
    cursor: props.onClick ? "pointer" : "normal"
  });

  return (
    <PictureGrid0 item xs={xs}>
      <img src={url} style={{width: '100%', height: 'auto'}} onClick={props.onClick} />
      {props.children}
    </PictureGrid0>);
}

export default PictureGird;
