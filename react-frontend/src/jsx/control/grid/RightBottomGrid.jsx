import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const RightBottomGrid0 = styled(Grid)({
  position: 'fixed',
  bottom: 10,
  right: 0,
  width:'40px',
  padding:0
  
});

function RightBottomGrid(props) {
  return (
    <RightBottomGrid0>
      {props.children}
    </RightBottomGrid0>
  );
}

export default RightBottomGrid;
