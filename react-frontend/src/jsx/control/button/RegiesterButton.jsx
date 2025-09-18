import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const RegiesterButton0 = styled(Button)({
  minWidth:'350px',
  padding:'0px',
  height:'50px',
  marginLeft:'0',
  fontSize: '20',
});

function RegiesterButton(props) {
  return (
    <RegiesterButton0
      variant="contained"
      color="primary"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </RegiesterButton0>
  );
}

export default RegiesterButton;
