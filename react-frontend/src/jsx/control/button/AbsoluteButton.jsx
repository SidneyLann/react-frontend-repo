import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export default function AbsoluteButton(props) {
    
const ContainedButton0 = styled(Button)({
    position: "absolute",
    top: props.top,
    left: props.left
  });
  
  return (
    <ContainedButton0
      variant="contained"
      color="primary"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </ContainedButton0>
  );
}