import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const HoverListGrid20 = styled(Grid)({
  
});

function HoverListGrid2(props) {
  return (
    <HoverListGrid20
      id={props.id}
    >
      {props.children}
    </HoverListGrid20>
  );
}

export default HoverListGrid2;
