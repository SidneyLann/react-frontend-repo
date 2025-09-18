import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const Button0 = styled(Button)({});

function NormalButton(props) {
  return (
    <Button0 component={props.component} onClick={props.onClick}  size={props.size} color={props.color} variant="contained" disabled={props.disabled}>
      {props.children}
    </Button0>
  );
}

export default NormalButton;
