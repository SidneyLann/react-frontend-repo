import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const LinkButton0 = styled(Button)({
  marginLeft: '50px'
});

function LinkButton(props) {
  return (
    <LinkButton0
            // size="small"
      {...props}
      color="primary"
      to={props.to}
      justify="space-around"
      onClick={props.onClick}
    >
      {props.children}
    </LinkButton0>
  );
}

export default LinkButton;
