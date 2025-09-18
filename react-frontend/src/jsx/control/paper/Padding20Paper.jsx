import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import React from 'react';

const Padding20Paper0 = styled(Paper)({
  padding: 20
});

function Padding20Paper(props) {
  return <Padding20Paper0 container justify="center" {...props}>{props.children}</Padding20Paper0>;
}

export default Padding20Paper;
