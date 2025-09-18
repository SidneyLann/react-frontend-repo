import React from "react";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";

const RightRegButton0 = styled(Button)({
    margin:'0 auto',
    width:'100px',
    height:'40px'
});

function RightRegButton(props) {
  return (
    <RightRegButton0
      variant="contained"
      component={props.component}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </RightRegButton0>
  );
}

export default RightRegButton;
