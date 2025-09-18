import React from "react";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";

const RightLoginButton0 = styled(Button)({
    margin:'0 auto',
    width:'100px',
    height:'40px'
});

function RightLoginButton(props) {
  return (
    <RightLoginButton0
      variant="contained"
      color="primary"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </RightLoginButton0>
  );
}

export default RightLoginButton;
