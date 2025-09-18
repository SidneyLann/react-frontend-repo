import React from "react";
import { styled } from '@mui/system';
import Typography from "@mui/material/Typography";

const H4Text0 = styled(Typography)({

});

function H4Text(props) {
  return (
    <H4Text0 variant="h4" component="h4">
      {props.children}
    </H4Text0>
  );
}

export default H4Text;
