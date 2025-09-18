import React from "react";
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const H2Text0 = styled(Typography)({
	
});

function H2Text(props) {
  return (
    <H2Text0 variant="h5" component="h2">
      {props.children}
    </H2Text0>
  );
}

export default H2Text;
