import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const ExtraText0 = styled(Typography)({
  color: 'gray',
  display:'inline-block',
  fontSize: '0.7em',
  height:'40px',
  lineHeight:'40px',
  margin:0,
});

function ExtraText(props) {
  return (
    <ExtraText0 component="p">
      {props.children}
    </ExtraText0>
  );
}

export default ExtraText;
