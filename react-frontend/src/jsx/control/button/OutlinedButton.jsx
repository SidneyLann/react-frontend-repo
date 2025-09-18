import React from "react";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";

const OutlinedButton0 = styled(Button)({});

function OutlinedButton(props) {
  return (
    <OutlinedButton0
      variant="outlined"
      onClick={props.onClick}
      color="primary"
      component={props.component}
      to={props.to}
    >
      {props.children}
    </OutlinedButton0>
  );
}

export default OutlinedButton;
