import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const RightsmallGrid0 = styled(Grid)({
  background: '#fff',
  width: '24.5%',
  height: 330,
  padding: 10,
  marginBottom:'10px'
});

function RightsmallGrid(props) {
  return (
    <RightsmallGrid0>
      {props.children}
    </RightsmallGrid0>
  );
}

export default RightsmallGrid;
