import React from 'react';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

const Content0 = styled(Grid)({
    margin:0,
    
});

function Content(props) {
  return <Content0 item container direction={'column'} xs={8} spacing={8} >{props.children}</Content0>;
}

export default Content;
