import React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const TextButton0 = styled(Typography)({
  flexDirection: 'row',
  justifyContent: "space-between",
  cursor:'pointer',
});

function TextButton(props) {
  return (
    <TextButton0 gutterBottom onClick={props.onClick} variant={props.variant} component={props.component}>
      {props.children}
    </TextButton0>
  );
}

export default TextButton;

