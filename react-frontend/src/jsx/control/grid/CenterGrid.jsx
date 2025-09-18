import React from "react";
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";

const CenterGrid0 = styled(Grid)({
  display:'flex',
  width:'100%',
  justifyContent: 'center'
});

function CenterGrid(props) {
  return (
    <CenterGrid0>
      {props.children}
    </CenterGrid0>
  );
}

export default CenterGrid;
