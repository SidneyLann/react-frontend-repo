import React from "react";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";

const RightButton0 = styled(Button)({
  height:'40px',
});

function RightButton(props) {
  return (
    <RightButton0
      variant="contained"
      color="primary"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </RightButton0>
  );
}

export default RightButton;
