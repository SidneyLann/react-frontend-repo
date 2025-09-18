import React from "react";
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const PText0 = styled(Typography)({
	
});

function PText(props) {
  return (
    <PText0 component="p" color={props.color} onClick={props.onClick}>
      {props.children}
    </PText0>
  );
}

export default PText;
