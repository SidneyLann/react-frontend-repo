import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const ContainedButton0 = styled(Button)({
  minWidth:'350px',
  padding:'0px',
  height:'50px',
  marginLeft:'100px'
  // add css here

});

function ContainedButton(props) {
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

export default ContainedButton;
