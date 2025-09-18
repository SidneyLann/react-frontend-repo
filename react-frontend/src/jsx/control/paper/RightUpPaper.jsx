import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const RightUpPaper0 = styled(Paper)({
  padding: 0,
  width: '100%',
  flexDirection: 'row-reverse ',
  paddingRight: '10px',
  //   textAlign: 'right'
  display: 'flex',
  backgroundColor: '#eee',
  cursor:'pointer'
});

function RightUpPaper(props) {
  return <RightUpPaper0 container elevation={0}>{props.children}</RightUpPaper0>;
}

export default RightUpPaper;
