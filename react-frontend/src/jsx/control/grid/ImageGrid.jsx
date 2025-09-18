import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";
import Logo from 'image/logo.png';

const ImageGrid0 = styled(Grid)({
  width:'100px',
  height:'100px',
});

function ImageGrid(props) {
  return (
      <img  src={Logo} />
  );
}

export default ImageGrid;
