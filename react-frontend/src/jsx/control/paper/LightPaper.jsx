import React from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';

function LightPaper(props) {

const LightPaper0 = styled(Paper)({
  margin: 10,
  paddingLeft: 5
});

  return <LightPaper0>{props.children}</LightPaper0>
}

export default LightPaper;