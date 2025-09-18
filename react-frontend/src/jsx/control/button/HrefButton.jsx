import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import Button from "@mui/material/Button";

const HrefButton0 = styled(Button)({});

function HrefButton(props) {
  return (
    <HrefButton0 
        href={props.href}
        color="primary"
        >
      {props.children}
    </HrefButton0>
  );
}

export default HrefButton;
