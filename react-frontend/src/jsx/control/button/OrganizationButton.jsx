import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const Button0 = styled(Button)({
    height:'50px',
    lineHeight:'37px',
    borderRight:'1px solid #ddd'
});

function OrganizationButton(props) {
  return (
    <Button0 component={props.component} to={props.to} variant="text" onClick={props.onClick}>
      {props.children}
    </Button0>
  );
}

export default OrganizationButton;
