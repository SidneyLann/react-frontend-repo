import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import loginBg from "image/login-bg.jpg";

const ImagePaper0 = styled(Paper)({
    backgroundImage: `url(${loginBg})`,
    position: 'relative',
    height: '540px',
    padding: 16,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  });

function ImagePaper(props) {
    return <ImagePaper0  container >{props.children}</ImagePaper0>
}

export default ImagePaper;